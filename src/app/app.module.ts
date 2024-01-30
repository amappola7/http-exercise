import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './ui/pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './ui/pages/login/login.component';
import { CreateProductComponent } from './ui/pages/create-product/create-product.component';
import { ErrorInterceptor } from "./interceptors/error.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  //provide:HTTP_INTERCEPTORS => es un token para inyectar dependencias para intercepcion de errores 
  providers: [{provide:HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
