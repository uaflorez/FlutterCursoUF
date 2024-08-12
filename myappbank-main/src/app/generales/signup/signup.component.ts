import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  codeUser: string = "";
  nombreUser: string = "";
  password: string = "";

  constructor(private service: ServiceService, private dataService : DataService){}

  fnCancelSingUp(){
    this.service.gBoolUserSingUp = false;
  }
  
  fnSignUp() {
    this.dataService.fnSingUp(this.codeUser, this.nombreUser, this.password).subscribe({
      next: res => {
        console.log(res);
      },
      error: err => {
        console.log(err);
      }
    });
    console.log("listo");
  }


}
