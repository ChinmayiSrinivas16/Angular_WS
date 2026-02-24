import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaptopService {
  private baseUrl = 'http://localhost:8080/laptop';

  constructor(private http: HttpClient) {}

  // GET all laptops
  getLaptops(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }

  // ADD laptop
  addLaptop(laptop: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, laptop);
  }

  // UPDATE laptop
  updateLaptop(id: number, laptop: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, laptop);
  }

  // DELETE laptop
  deleteLaptop(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}