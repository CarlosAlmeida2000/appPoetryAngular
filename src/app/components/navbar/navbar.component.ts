import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private routes: Router, private cookies: CookieService) { 
  }

  cerrarSession(){
    this.cookies.delete('session-poetry');
    localStorage.clear();
    this.routes.navigateByUrl('/');
  }

}
