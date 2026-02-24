// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-red',
//   standalone: false,
//   templateUrl: './red.html',
//   styleUrls: ['./red.css'],
// })
// export class Red {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-red',
  standalone: false,
  templateUrl: './red.html',
  styleUrls: ['./red.css']
})
export class Red {

  // Array for ngFor (Cafe Categories)
  categories: string[] = [
    'Coffee',
    'Snacks',
    'Desserts',
    'Beverages'
  ];

  selectedCategory: string = '';

  // Event Binding Function
  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}