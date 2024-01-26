import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://fakeUrl.com/auth';

  constructor(
    private http: HttpClient
  ) { }

  registerUser(userCredentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userCredentials)
  }

  loginUser(userCredentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userCredentials)
  }

  // Métodos para almacenar y obtener el token de acceso
  private setAccessToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  private getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // Método para validar si el usuario está autenticado o no
  isAuthenticated(): boolean {
    const token = this.getAccessToken();
    return !!token; // Devuelve true si hay un token, lo que significa que el usuario está autenticado
  }

  // Método para cerrar sesión (simulado)
  logout(): void {
    localStorage.removeItem('access_token');
  }
}
