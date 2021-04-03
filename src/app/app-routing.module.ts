import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PageNotFoundedComponent } from './page-not-founded/page-not-founded.component';
import {LoginpageComponent} from './loginpage/loginpage.component'

const routes: Routes = [

  {path:'' , component:LoginpageComponent},
  { path: 'login', component: LoginpageComponent },

  {path:'gallery' , component:GalleryComponent},
  {path:'home/:i' , component:HomeComponent},
  {path:"**" , component:PageNotFoundedComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
