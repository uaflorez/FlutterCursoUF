import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './services/data.service';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mi Primera pagina de Banco';

  lbolUserLogu: boolean = false;
  lstrUser: string = '';
  lstrPass: string = '';
  lstrMessag: string = '';

  constructor(private apiService: DataService, public service: ServiceService, private router: Router){}

  fnLogIN(){
    this.apiService.fnValiUser(this.lstrUser,this.lstrPass).subscribe({next: res =>{
      if (res[0].Status == 'OK'){
        this.lbolUserLogu = true;
        this.lstrMessag = '';
        this.service.lstrUser = this.lstrUser;
        this.router.navigate(['home']);
      }else{
        this.lbolUserLogu = false;
        this.lstrMessag = res[0].NombUsua;
      }
    }});
  }

  fnLogOut(){
    this.lbolUserLogu = false;
  }

  fnSignUp(){
    this.service.lbolSignUp = true;
  }
}
