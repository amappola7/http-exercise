import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakeUrl.com/products';

  constructor(
    private http: HttpClient
  ) { }

  createProduct(productData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, productData)
  }
}
