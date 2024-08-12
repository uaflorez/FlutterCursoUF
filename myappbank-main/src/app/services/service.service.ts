import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  gBoolUserSingUp: boolean = false;
  //lbolSignUp: boolean = false;
  lstrUser: string = '';

  constructor() { }
}
