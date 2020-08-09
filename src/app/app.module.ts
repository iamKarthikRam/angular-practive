import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewEmployeeComponent } from './employee/viewEmployee/viewEmployee.component';
import { CurrentEmployeeComponent } from './employee/currentEmployee/currentEmployee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './highlight-directive';
import { FilterPipe } from './filter.pipe';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path:'welcome',component:WelcomeComponent
  },
  {
    path:'currentEmployee/:id',component: CurrentEmployeeComponent
  },
  {
    path:'viewEmployee',component: ViewEmployeeComponent
  },
  {
    path:'not-found',component: PageNotFoundComponent
  },
  {
    path:'**',redirectTo:'/not-found'
  }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes),ReactiveFormsModule,HttpClientModule],
  declarations: [ AppComponent,FilterPipe, HelloComponent,LoginComponent,WelcomeComponent,ViewEmployeeComponent,CurrentEmployeeComponent, PageNotFoundComponent,HighlightDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
