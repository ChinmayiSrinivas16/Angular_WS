import { Component } from '@angular/core';
import { Myservice } from '../myservice';
@Component({
  selector: 'app-blue',
  standalone: false,
  templateUrl: './blue.html',
  styleUrl: './blue.css',
})
export class Blue {
//Interpolation
  name: string = 'Blue Component';

Books:any[] = [
  { id: 1, title: 'Book 1' },
  { id: 2, title: 'Book 2' },
  { id: 3, title: 'Book 3' },
];

  //event binding
  onButtonClick() {
    alert('Button clicked!');
  }

  //two way binding
  inputText: string = '';

  //property binding
  imageUrl: string ="punch.avif";
  constructor(private serve1:Myservice){
 console.log('Blue component constructor called');
  }
  

 ngOnInit(){
  console.log('Books from MyService:', this.serve1.getBooks()); 
  this.Books=this.serve1.getBooks();
  //this.Books.push(this.serve1.getBooks()[0]);
  this.serve1.addBook({ id: 4, title: 'The catcher' });
  this.serve1.addBook({ id: 5, title: 'ikagai' });
  console.log('Books after adding a new book:', this.serve1.getBooks());
    console.log('Blue component initialized');
 }
}