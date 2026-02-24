import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LaptopService } from '../laptop-service';

@Component({
  selector: 'app-laptop',
  standalone: true,
  imports: [CommonModule, FormsModule],   
  templateUrl: './laptop.html',
  styleUrl: './laptop.css',
})
export class Laptop {
  laptops: any[] = [];

  laptop = {
    id: 0,
    brand: '',
    price: 0
  };

  isEdit = false;

  constructor(private service: LaptopService) {}

  ngOnInit(): void {
    this.loadLaptops();
  }

  loadLaptops() {
    this.service.getLaptops().subscribe(data => {
      this.laptops = data;
    });
  }

  addOrUpdate() {
    if (this.isEdit) {
      this.service.updateLaptop(this.laptop.id, this.laptop).subscribe(() => {
        this.loadLaptops();
        this.resetForm();
      });
    } else {
      this.service.addLaptop(this.laptop).subscribe(() => {
        this.loadLaptops();
        this.resetForm();
      });
    }
  }

  editLaptop(l: any) {
    this.laptop = { ...l };
    this.isEdit = true;
  }

  deleteLaptop(id: number) {
    this.service.deleteLaptop(id).subscribe(() => {
      this.loadLaptops();
    });
  }

  resetForm() {
    this.laptop = {
      id: 0,
      brand: '',
      price: 0
    };
    this.isEdit = false;
  }
}