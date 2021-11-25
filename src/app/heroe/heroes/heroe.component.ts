import { Component } from "@angular/core";


@Component({
    selector: 'heroeapp-component',
    templateUrl:'heroe.component.html'

})

export class HeroeComponent {

    nombre:string = 'Iron man';
    edad: number = 42;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }


    ObtenerNombre(): string{
        return `${this.nombre} - ${this.edad} `;
    }

}