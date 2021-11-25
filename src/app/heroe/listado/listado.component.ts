import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: []
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Iron man','Hulk','Thor'];

  HeroeBorrado: string = '';


  borrarHeroe(){
    console.log('borrando...');

   this.HeroeBorrado = this.heroes.shift() || '';
    
    //this.heroes[0] = '';
    
    
  }


  

}



