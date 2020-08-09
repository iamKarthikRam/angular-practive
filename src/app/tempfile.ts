import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';
import { Subject,throwError } from 'rxjs'

@Injectable({providedIn:'root'})
export class PostService {
    errorSubject = new Subject<string>();

    constructor(private http: HttpClient){

    }
    createAndStorePost(title:string,content:string){
        const postData = {title: title,content:content}
        this.http.post('https://angular-backend-b346b.firebaseio.com/posts.json',postData)
        .subscribe((responseData)=>{
        console.log(responseData);
        },error=>{
        this.errorSubject.next(error.error['error']);
    });
    }

    fetchPost(){
        let searchparams= new HttpParams();
        searchparams = searchparams.append('test','1');
        searchparams =searchparams.append('test','2')
        return this.http.get('https://angular-backend-b346b.firebaseio.com/posts.json',
        {
            headers: new HttpHeaders({'Custom-Header':'hello'}),
            //params: new HttpParams().set('print','prity')
            params: searchparams,
            responseType: 'json'
        })
        .pipe(map(responseData=>{
        const postsArray = [];
        for(const key in responseData){
            if(responseData.hasOwnProperty(key)){
            postsArray.push({...responseData[key], id: key})
            }        
        }
        return postsArray;
        }),catchError(responseError => {
            return throwError(responseError);
        }));

    }

    deletePost(){
        return this.http.delete('https://angular-backend-b346b.firebaseio.com/posts.json');
    }
}