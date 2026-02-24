// import { Injectable } from '@angular/core';
// import { Book } from './Book';

// @Injectable({
//   providedIn: 'root'
// })
// export class LibraryService {

//   private bookList: Book[] = [
//     { id: 1, title: 'Java', author: 'James' },
//     { id: 2, title: 'Angular', author: 'Google' }
//   ];

//   getBooks(): Book[] {
//     return this.bookList;
//   }

//   addBook(book: Book) {
//     this.bookList.push(book);
//   }
// }
import { Injectable } from '@angular/core';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private bookList: Book[] = [
    { id: 1, title: 'Java', author: 'James' },
    { id: 2, title: 'Angular', author: 'Google' }
  ];

  getBooks(): Book[] {
    return this.bookList;
  }

  addBook(book: Book) {
    this.bookList.push(book);
  }

  deleteBook(id: number) {
  const index = this.bookList.findIndex(b => b.id === id);
  if (index !== -1) {
    this.bookList.splice(index, 1);
  }
}

  // ✅ UPDATE
  updateBook(updatedBook: Book) {
    const index = this.bookList.findIndex(b => b.id === updatedBook.id);
    if (index !== -1) {
      this.bookList[index] = updatedBook;
    }
  }
}