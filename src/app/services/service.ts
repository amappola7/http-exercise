import { HttpHeaders, HttpClient, HttpParams,HttpInterceptor, HttpRequest,
   HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

// Headers para antes de iniciar sesión
const headers: HttpHeaders = new HttpHeaders({
  'content-type': 'application/json',
  'authorization': 'tokenX'
});

// HttpClient.get('url', {headers: headers}).susbcribe((response) => {}) // Haciendo validación del token y del tipo de contenido

// Manejo de HttpParams
const params: HttpParams = new HttpParams()
.set('param1', 'value1')
.set('param2', 'value2');

// HttpClient.get('url', {params: params}).susbcribe((response) => {})

// const headersII
const body = {
  key1: 'value1'
}

// HttpClient.post('url', body, {params: params, headers: headers}).susbcribe((response) => {}) // Enviando cuerpo y parametros para hacer creación o cambios

 class ErrorInterception implements HttpInterceptor{
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   // throw new Error("Method not implemented.");
   return next.handle(req).pipe(
    catchError((error:HttpErrorResponse)=>{
      return throwError(()=>{error})
    })
   )
  }

}