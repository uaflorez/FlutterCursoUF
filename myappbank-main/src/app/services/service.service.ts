import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  gBoolUserSingUp: boolean = false;
  lbolSignUp: boolean = false;
  //lstrUser: string = '';
  lbolUserLogu: boolean = false;
  lbolUserLogTem: boolean = false;
  gCodiUser: string = '';

  private ResSubject = new Subject<any>();
  public RestObserver$ = this.ResSubject.asObservable(); 

  constructor() { }


  fnSetRestObserver(pvstrObserver: any) {
    this.ResSubject.next(pvstrObserver);
  }


}
