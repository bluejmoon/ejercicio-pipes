import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';

  nombre = 'Valentina Garzón';
  saldo = 50.5;
  dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
  fechaActual = new Date();
  articulos = [{
      codigo: 1,
      descripcion: "papas",
      precio: 12.33
    },{
      codigo: 2,
      descripcion: "manzanas",
      precio: 54
    }];
}
