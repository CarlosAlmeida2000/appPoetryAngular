import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChekedSessionGuard implements CanActivate {

  constructor(private routes: Router, private cookies: CookieService) { 
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.cookies.get('session-poetry').length == 0){
        this.routes.navigateByUrl('/');
        return false;
      }
    return true;
  }
  
}
