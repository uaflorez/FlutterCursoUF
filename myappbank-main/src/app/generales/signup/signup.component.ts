import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  codiUser: string = '';
  nombUser: string = '';
  password: string = '';
  lstrMensaje: string = '';

  constructor(private service: ServiceService, private dataService : DataService){}

  fnCancelSignUp(){
    this.service.gBoolUserSingUp = false;
  }
  
  fnSignUp() {
    this.dataService.fnSignUp(this.codiUser, this.nombUser, this.password).subscribe({
      next: (res) => {
        if (res[0].Status == 'OK') {
          this.lstrMensaje = 'Registro Exitoso';
          console.log('Exitoso');
        } else {
          this.lstrMensaje = res[0].Error;
          console.log('Falló');
        }
      },
      // error: err => {
      //   console.log(err);
      // }
    });
    console.log("listo");
  }


}
