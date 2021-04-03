import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import {MyServiceService} from '../my-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pagenumbers:number[]=[];

  testUser="ahmed";
  userDataNew="web"

  myDate = new Date();

  homeEmps:any={};
  avatar:any;

  homestud:any={};
  // std:any;




  constructor(private route: ActivatedRoute ,
    private MyServiceService:MyServiceService) {
      for(let i=1;i<11;i++){
        this.pagenumbers.push(i);
      }

   }


  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let id = params['i'];
        if (id) this.getDetails(id);
      });

      this.route.params.subscribe(
        params => {
          let id = params['i'];
          if (id) this.getDetailsStudents(id,this.pagenumbers);
        });
  }

  getDetails(id:number) {
    this.MyServiceService.getNews()
      .subscribe(
        data=>  {
          this.homeEmps = data['items'][id];
           this.avatar= this.homeEmps['owner']['avatar_url']

        console.log(this.homeEmps);
        });
  }

  getDetailsStudents(id:number ,page) {
    this.MyServiceService.getStudents(page)
      .subscribe(
        data=>  {
          this.homestud = data['data'][id];

        console.log(this.homestud);
        });
  }

}
