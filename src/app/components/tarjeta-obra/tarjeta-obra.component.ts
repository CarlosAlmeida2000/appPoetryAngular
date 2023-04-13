import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoetryService } from 'src/app/services/poetry-services.service';

@Component({
  selector: 'app-tarjeta-obra',
  templateUrl: './tarjeta-obra.component.html',
  styleUrls: ['./tarjeta-obra.component.css']
})
export class TarjetaObraComponent {

  obras: any[] = [];
  obrasFavoritas: any[] = [];
  loading: boolean = false;
  nameAuthor: string = "";
  urlRetorno: string = "";
  
  constructor(private router: ActivatedRoute, private poetry: PoetryService) {
    
    this.router.params.subscribe( params => {
      this.nameAuthor = params['namePoeta']; 
      this.urlRetorno = params['urlRetorno']; 
      this.getObras();
    });
  }

  getObras(): void {

    this.obras = [];
    this.obrasFavoritas = [];
    this.loading = true;

    this.poetry.getObras(this.nameAuthor)
      .subscribe((data: any) => {

        for (let i = 0; i < data.length; i++) {
          if (localStorage.getItem('obra-' + data[i].title) == null) {
            this.obras.push(data[i].title);
          }else if (localStorage.getItem('obra-' + data[i].title) != null){
            this.obrasFavoritas.push(data[i].title);
          }
        }

        this.loading = false;
      });
  }

  changeFavoriteObra(nameObra: string, checkbox: HTMLInputElement){
    
    if(checkbox.checked){
      // registra una obra como favorita
      localStorage.setItem('obra-' + nameObra, String(checkbox.checked));
    }else{
      // elimina la obra de mis favoritos
      localStorage.removeItem('obra-' + nameObra);
    }
    // se actualiza la lista de obras
    this.getObras();
  }
}
