import { NgModule } from "@angular/core";
import { contadorComponent } from './contad/contador.component';


@NgModule({
    declarations:[
        contadorComponent
    ],
    exports:[
        contadorComponent
    ]
})

export class ContadorModule {}