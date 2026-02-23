import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Myservice {
  Books:any[]=[
  {
    id:1,
    title:'The Great Gatsby',
  },
  {
    id:2,
    title:'To Kill a Mockingbird',      
  },
  {
    id:3,
    title:'1984', 
  },
];
getBooks(){
  return this.Books;    
}
addBook(books:any) {
this.Books.push(books);
}
// greeting(){
//   return "hello from MyService";
// }
}