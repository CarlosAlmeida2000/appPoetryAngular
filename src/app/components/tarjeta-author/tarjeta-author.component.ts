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
          // lista solo los poetas favoritos
          for(let i = 0; i< localStorage.length; i++){
            if(localStorage.key(i)?.substring(0, 5) == 'poeta'){
              this.poetas.push(localStorage.key(i)?.split('-')[1]);
            }
          }
        } else {
          // lista los poetas que no son favoritos
          for (let i = 0; i < data.authors.length; i++) {
            if (localStorage.getItem('poeta-' + data.authors[i]) == null) {
              this.poetas.push(data.authors[i]);
            }
          }
        }

        this.loading = false;
      });
  }

  changeFavoritePoeta(namePoeta: string, checkbox: HTMLInputElement){
    
    if(checkbox.checked){
      // registra un poeta como favorito
      localStorage.setItem('poeta-' + namePoeta, String(checkbox.checked));
    }else{
      // elimina el poeta de mis favoritos
      localStorage.removeItem('poeta-' + namePoeta);
    }
    // se actualiza la lista con los nuevos cambios
    this.getAllPoetas();
  }

  isFavoritePoeta(namePoeta: string){
    return localStorage.getItem('poeta-' + namePoeta) == null? false:true;
  }

  verObras(namePoeta: string){
    this.router.navigate([ '/obras', namePoeta, this.soloFavorito == true?'favorites': 'home' ]);
  }
}
