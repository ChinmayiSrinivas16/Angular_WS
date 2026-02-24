import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Red } from './red/red';
import { Blue } from './blue/blue';
import {Green } from './green/green';
import { Yellow } from './yellow/yellow';
import { Orange } from './orange/orange';
import { Catalog } from './catalog/catalog';

const routes: Routes = [
  {path:'',redirectTo:'laptop',pathMatch:'full'},
  {path:'red',component:Red},
   {path:'blue',component:Blue},
   {path:'orange',component:Orange},
    {path:'green',component:Green},
    {path:'yellow',component:Yellow},
    {path:'catalog',component:Catalog},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
