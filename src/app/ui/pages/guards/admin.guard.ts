import { Injectable, inject } from "@angular/core";
import { Observable, pipe, map } from "rxjs";
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

class PermissionService {
  constructor(
    private router:Router,
    private authService:AuthService
  ) {
    
  }
  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean |UrlTree{
     if(this.authService.isAdmin()){
      console.log('acceso activado');
      return true
     }else{
      return this.router.createUrlTree(['/register'])
     }
  }
}
export const adminGuard:CanActivateFn=(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean |UrlTree=>{
  return inject(PermissionService).canActivate(next, state);
};
