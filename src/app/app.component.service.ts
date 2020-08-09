import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class AppService {
  constructor(private http: HttpClient){

  }

  getAllEmployees(){
    this.http.get('http://dummy.restapiexample.com/api/v1/employees').pipe(
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse){
    return Observable.throw(err.error() || 'Server Error');
  }

}