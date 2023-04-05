import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  totalFavoritos: number = 0;
  favoritosPoetas: number = 0;
  favoritosObras: number = 0;

  constructor() {
    this.calcularSumario();
  }

  calcularSumario(){

    this.totalFavoritos = localStorage.length;

    for(let i = 0; i< localStorage.length; i++){
      if(localStorage.key(i)?.substring(0, 5) == 'poeta'){
        this.favoritosPoetas += 1;
      }else{
        this.favoritosObras += 1;
      }
    }
  }

}
