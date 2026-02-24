import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app';
import { AppRoutingModule } from './app-routing-module';

import { Red } from './red/red';
import { Yellow } from './yellow/yellow';
import { Blue } from './blue/blue';
import { Green } from './green/green';
import { Orange } from './orange/orange';
import { Catalog } from './catalog/catalog';
import { AddBook } from './add-book/add-book';

@NgModule({
  declarations: [
    AppComponent,
    Red,
    Yellow,
    Blue,
    Green,
    Orange,
    AddBook
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Catalog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }