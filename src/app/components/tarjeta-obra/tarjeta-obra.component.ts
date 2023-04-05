import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PoetryService } from 'src/app/services/poetry-services.service';

@Component({
  selector: 'app-tarjeta-obra',
  templateUrl: './tarjeta-obra.component.html',
  styleUrls: ['./tarjeta-obra.component.css']
})
export class TarjetaObraComponent {

  obras: any[] = [];
  loading: boolean = false;
  nameAuthor: string = "";
  @Input() soloFavorito: boolean = false;
  
  constructor(private router: ActivatedRoute, private poetry: PoetryService, private cookies: CookieService) {
    
    this.router.params.subscribe( params => {
      this.nameAuthor = params['namePoeta']; 
      this.getObras();
    });
  }

  existeSession(){
    if(this.cookies.get('session-poetry').length == 0){
      return false;
    }
    return true;
  }

  getObras(): void {

    this.obras = [];
    this.loading = true;

    this.poetry.getObras(this.nameAuthor)
      .subscribe((data: any) => {

        if (this.soloFavorito) {

          for (let i = 0; i < data.length; i++) {
            if (localStorage.getItem(data[i].title) != null) {
              this.obras.push(data[i].title);
            }
          }

        } else {

          for (let i = 0; i < data.length; i++) {
            if (localStorage.getItem(data[i].title) == null) {
              this.obras.push(data[i].title);
            }
          }

        }

        this.loading = false;
      });
  }

  changeFavoriteObra(nameObra: string, checkbox: HTMLInputElement){
    
    if(checkbox.checked){
      // registra obra como favorita
      localStorage.setItem(nameObra, String(checkbox.checked));
    }else{
      // elimina la obra de mis favoritos
      localStorage.removeItem(nameObra);
    }
    // se actualiza la lista de obras
    this.getObras();
  }

  isFavoriteObra(nameObra: string){
    return localStorage.getItem(nameObra) == null? false:true;
  }
}
