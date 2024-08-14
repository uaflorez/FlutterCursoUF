import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './services/data.service';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Mi Primera pagina de Banco';

  lbolUserLogu: boolean = false;
  lbolUserLogTem: boolean = false;
  lstrUser: string = '';
  lstrPass: string = '';
  lstrMessag: string = '';

  constructor(private apiService: DataService, public service: ServiceService, private router: Router) { }
  
  ngOnInit(): void {
    this.lbolUserLogu = false;
  }
  
  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  //   this.lbolUserLogu = this.lbolUserLogTem;
  // }

  fnLogIN(){
    this.apiService.fnValiUser(this.lstrUser,this.lstrPass).subscribe({next: res =>{
      if (res[0].Status == 'OK'){
        this.lbolUserLogu = true;
        //this.lbolUserLogTem = true;
        this.service.lbolUserLogu = true;
        this.service.gCodiUser = this.lstrUser;
        this.lstrMessag = '';
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
    this.service.gBoolUserSingUp = true;
  }
}
