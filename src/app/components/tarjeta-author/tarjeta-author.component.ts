import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PoetryService } from 'src/app/services/poetry-services.service';

@Component({
  selector: 'app-tarjeta-author',
  templateUrl: './tarjeta-author.component.html',
  styleUrls: ['./tarjeta-author.component.css']
})
export class TarjetaAuthorComponent {

  poetas: any[] = [];
  loading: boolean = false;
  @Input() soloFavorito: boolean = false;
  
  constructor(private poetry: PoetryService,  private router: Router, private cookies: CookieService) {
    this.getAllPoetas();
  }

  existeSession(){
    if(this.cookies.get('session-poetry').length == 0){
      return false;
    }
    return true;
  }

  getAllPoetas(): void {

    this.poetas = [];
    this.loading = true;

    this.poetry.getAllPoetas()
      .subscribe((data: any) => {

        if (this.soloFavorito) {

          for (let i = 0; i < data.authors.length; i++) {
            if (localStorage.getItem(data.authors[i]) != null) {
              this.poetas.push(data.authors[i]);
            }
          }

        } else {

          for (let i = 0; i < data.authors.length; i++) {
            if (localStorage.getItem(data.authors[i]) == null) {
              this.poetas.push(data.authors[i]);
            }
          }

        }

        this.loading = false;
      });
  }

  changeFavoritePoeta(namePoeta: string, checkbox: HTMLInputElement){
    
    if(checkbox.checked){
      // registra poeta como favoritos
      localStorage.setItem(namePoeta, String(checkbox.checked));
    }else{
      // eliminar el poeta de mis favoritos
      localStorage.removeItem(namePoeta);
    }
    // se actualiza la lista con los nuevos cambios
    this.getAllPoetas();
  }

  isFavoritePoeta(namePoeta: string){
    return localStorage.getItem(namePoeta) == null? false:true;
  }

  getObras(namePoeta: string){
    this.router.navigate([ '/obras', namePoeta ]);
  }
}
