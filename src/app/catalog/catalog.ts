// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Book } from '../Book';
// import { LibraryService } from '../libraryservice';

// @Component({
//   selector: 'app-catalog',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './catalog.html'
// })
// export class Catalog {
//   bookList: Book[] = [];

//   constructor(private libraryService: LibraryService) {
//     this.bookList = this.libraryService.getBooks();
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../Book';
import { LibraryService } from '../libraryservice';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.html'
})
export class Catalog {

  bookList: Book[] = [];

  // for update
  selectedBook: Book | null = null;

  constructor(private libraryService: LibraryService) {
    this.bookList = this.libraryService.getBooks();
  }

  // ✅ DELETE
  deleteBook(id: number) {
  this.libraryService.deleteBook(id);
}

  // load book into form for editing
  editBook(book: Book) {
    this.selectedBook = { ...book }; // copy
  }

  // ✅ UPDATE
  updateBook() {
    if (this.selectedBook) {
      this.libraryService.updateBook(this.selectedBook);
      this.selectedBook = null;
    }
  }
}