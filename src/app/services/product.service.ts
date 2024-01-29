import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakeUrl.com/products';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getProducts(): Observable<any> {
    if (this.authService.isAuthenticated()) {
      const token = localStorage.getItem('access_token');
      const headers = new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}`, { headers: headers })

    } else {
      return new Observable();
    }
  }

  createProduct(productData: any): Observable<any> {
    if (this.authService.isAuthenticated()) {
      const token = localStorage.getItem('access_token');
      const headers = new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(`${this.apiUrl}/create`, productData, { headers: headers })

    } else {
      return new Observable();
    }

  }
}
