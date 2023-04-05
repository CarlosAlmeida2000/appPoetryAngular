import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  forma: FormGroup;

  constructor( private fb: FormBuilder, private routes: Router, private cookies: CookieService) { 

    this.forma = this.fb.group({
      usuario  : ['admin', [ Validators.required, Validators.minLength(5)] ],
      password   : ['admin', [Validators.required, Validators.minLength(5)] ]
    });
  }


  get usuarioNoValido() {    
    return this.forma.get('usuario')?.invalid && this.forma.get('usuario')?.touched
  }

  get passwordNoValido() {
    return this.forma.get('password')?.invalid && this.forma.get('password')?.touched;
  }

  login() {

    if ( this.forma.invalid ) {

      return Object.values( this.forma.controls ).forEach( (control:any) => {
        
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
        
      });
     
    }else{
      
      if(this.forma.get('usuario')?.value == 'admin' && this.forma.get('password')?.value == 'admin'){
        this.cookies.set('session-poetry', this.forma.get('usuario')?.value);
        this.routes.navigateByUrl('/home');
      }

    }

    this.forma.reset({
      usuario: '',
      password: ''
    });

  }
}
