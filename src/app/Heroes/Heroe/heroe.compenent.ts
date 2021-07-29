import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class heroecomponent
{
    nombre: string = 'batman';
    edad: number = 40;

    get NombreCapitalizado () : string
    {
        return this.nombre.toUpperCase();
    }
    ObtenerNombre () : string
    {
        return `${this.nombre}-${this.edad}`;
    }

    CambiarNombre () : void
    {
        this.nombre = 'spiderman';
    }

    CambiarEdad () : void
    {
        this.edad = 30;
    }
}