import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";

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