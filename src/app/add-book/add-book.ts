import { Component } from '@angular/core';
import { LibraryService } from '../libraryservice';
import { Book } from '../Book';

@Component({
  selector: 'app-add-book',
  standalone: false,
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook {
  id: number = 0;
  title: string = '';
  author: string = '';

  constructor(private libraryService: LibraryService) {
  }

  addBookToList() {
    const newBook = {
      id: this.id,
      title: this.title,
      author: this.author,
    };

    this.libraryService.addBook(newBook);
    this.title = '';
    this.author = '';
  }
  addBook() {
  const newBook: Book = {
    id: Number(this.id),   // 👈 force number
    title: this.title,
    author: this.author
  };

  this.libraryService.addBook(newBook);

  // reset
  this.id = 0;
  this.title = '';
  this.author = '';
}
}
