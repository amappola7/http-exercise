import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
    .pipe(catchError((error)=>{
      return throwError(()=>{error})
    }))
  }

  // Métodos para almacenar y obtener el token de acceso
  private setAccessToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  private getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  private setHeaders(): HttpHeaders {
    const token = this.getAccessToken();
    return new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getAuthenticatedResource(url: string): Observable<any> {
    const headers = this.setHeaders();
    return this.http.get(url, {headers: headers})
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
   private getUser():any{
    const token = this.getAccessToken();
    const user =token?JSON.parse(atob(token).split('.')[1]):null;
    return user;
  }
  isAdmin():Boolean{
  const user=this.getUser()
    return user && user.role ==='admi';
  }
  
}
