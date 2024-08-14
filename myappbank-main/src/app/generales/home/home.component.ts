import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Subscription } from 'rxjs';
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

  public lSubscription: Subscription = new Subscription;

  constructor(public service: ServiceService) { }
  
  fnActiveObserver() {
    this.lSubscription = this.service.RestObserver$.subscribe((res: any) => {
      this.lSubscription.unsubscribe();
      console.log(res);
    })
  }

  fnTestObserver() {
    setTimeout(() => {
      console.log('Fin del time out')
      this.service.fnSetRestObserver('Fin del timeOut. Simulation de acctiondel usuario o trigger que lanza la accion del observable')
    }, 5000);
  }
  
}
