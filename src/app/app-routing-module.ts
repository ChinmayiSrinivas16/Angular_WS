import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Red } from './red/red';
import { Blue } from './blue/blue';
import {Green } from './green/green';
import { Orange } from './orange/orange';

const routes: Routes = [
  {path:'',redirectTo:'laptop',pathMatch:'full'},
  // {path:'red',component:Red},
   {path:'blue',component:Blue},
   {path:'orange',component:Orange},
    {path:'green',component:Green},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
