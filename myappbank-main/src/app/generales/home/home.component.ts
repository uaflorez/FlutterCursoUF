import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  lbolUserLogu: boolean = false;

  ldtFecha = new Date();
  lnumValor: number = 123456789;
  lnumPerc: number = 0.87654;
  lstrTexto: string = 'Hoy es la clase del martes';
  
}
