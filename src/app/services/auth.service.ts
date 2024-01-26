import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '';

  constructor(
    private http: HttpClient
  ) { }

  registerUser(userCredentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userCredentials)
  }

  loginUser(userCredentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userCredentials)
  }
}
