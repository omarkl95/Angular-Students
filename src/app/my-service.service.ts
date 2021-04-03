import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Observable, Observer} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  test:string;

  // getEmps()
  // {
  //   return [
  //     {name:"ahmed salah",salary:4365,age:34 , gender:"male"},
  //     {name:"salah",salary:4365,age:34, gender:"male"},
  //     {name:"nada",salary:4365,age:34, gender:"female"},
  //     {name:"ibrahim",salary:4365,age:34, gender:"male"},
  //     {name:"sara",salary:4365,age:34, gender:"female"},
  //     {name:"mohammed",salary:4365,age:34, gender:"male"},
  //     {name:"said",salary:4365,age:34, gender:"male"}
  //   ]
  // }


  constructor(private _HttpClient:HttpClient) { }


  // myCountry="us";

  // getDummyData():Observable<any>
  // {
  //   return this._HttpClient.get("https://jsonplaceholder.typicode.com/posts")
  // }
  getStudents(page):Observable<any> 
  // c:string
  {
    // this.myCountry = c;
    
    return this._HttpClient.get("https://reqres.in/api/users?page="+page+"&per_page=[students_per_page]")
  }

  getNews():Observable<any> 
  // c:string
  {
    // this.myCountry = c;
    
    return this._HttpClient.get("https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc")
  }
  
  getNewsID():Observable<any> 
  // c:string
  {
    // this.myCountry = c;
    
    return this._HttpClient.get("https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc")
  }









}
