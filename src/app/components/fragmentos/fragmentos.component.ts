import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoetryService } from 'src/app/services/poetry-services.service';

@Component({
  selector: 'app-fragmentos',
  templateUrl: './fragmentos.component.html',
  styleUrls: ['./fragmentos.component.css']
})
export class FragmentosComponent {

  fragmentos: any[] = [];
  loading: boolean = false;
  @Input() nameObra: string = "";

  constructor(private router: ActivatedRoute, private poetry: PoetryService) {
    
    this.router.params.subscribe( params => {
      this.nameObra = params['nameObra']; 
      this.verFragmentos();
    });
  }

  verFragmentos(){
    
    this.loading = true;
    this.poetry.getFragmento(this.nameObra)
    .subscribe((data: any) => {
  
      this.fragmentos = data;
      this.loading = false;

    });
  }

}
