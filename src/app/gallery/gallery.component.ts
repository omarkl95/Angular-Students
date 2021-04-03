import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MyServiceService} from '../my-service.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  term:string;
  galleyPosts=[];
  students=[];


  pagenumbers:number[]=[];

  constructor(public _MyServiceService:MyServiceService  ,    private router: Router,
    ) {
    for(let i=1;i<11;i++){
      this.pagenumbers.push(i);
    }

    this._MyServiceService.getNews().subscribe(data => this.galleyPosts = data.items)
    // "us"


   }
   getStudents (page){
    this._MyServiceService.getStudents(page).subscribe(res=>{
      this.students =res.data;
    })
  }
  

  changepage(ind){
    window.alert(ind)
    this.getStudents(ind)
    
  }
  onLogOut(){
    localStorage.setItem('loggedIn', 'false');
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.getStudents (this.pagenumbers)
  }

}
