import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  //apiUrl: string = 'https://erpapipruebas.azurewebsites.net/api/';

  apiUrlValiUser: string = 'https://erpapipruebas.azurewebsites.net/api/values/valiuser';
  apiUrlValiProfUser: string = 'https://erpapipruebas.azurewebsites.net/api/values/valiprof';
  apiUrlSignUp: string = 'https://erpapipruebas.azurewebsites.net/api/values/signup'
  apiUrlSaveAccounts: string = 'https://erpapipruebas.azurewebsites.net/api/values/SaveAccount';
  apiUrlGetAccounts: string = 'https://erpapipruebas.azurewebsites.net/api/values/GetAccounts';

  //Función para validar un usuario
  fnValiUser(CodiUser: string, PassUser: string): Observable<any> {

    let UserInfo: any[] = [];
    UserInfo.push({ 'CodiUser': CodiUser, 'PassUser': PassUser });

    return this.http.post(this.apiUrlValiUser, UserInfo, httpOptions).pipe(tap((res: any) => {
      return res;
    }));
  }

  fnGetAccounts(CodiUser: string): Observable<any> {
    let User: any[] = [];
    User.push({ 'CodiUser': CodiUser });

    return this.http.post(this.apiUrlGetAccounts, User, httpOptions).pipe(tap((res: any) => {
      return res;
    }));
  }

  fnValidProfile(CodiUser: string) {
    let UserInfo: any[] = [];
    UserInfo.push({ 'CodiUser': CodiUser });

    return this.http.post(this.apiUrlValiProfUser, UserInfo, httpOptions).pipe(tap((res: any) => {
      return res;
    }));
  }
  
  fnSignUp(CodiUser: string, nombreUser: string, password: string) {
    let UserInfo: any[] = [];
    UserInfo.push({ 'CodiUser': CodiUser, 'NombUser': nombreUser, 'PassUser': password });

    return this.http.post(this.apiUrlSignUp, UserInfo, httpOptions).pipe(tap((res: any) => {
      return res;
    }));
  }

  fnSaveAccount(CodiUser: string, nombreCuen: string, numeCuen: string) {
    let AccountInfo: any[] = [];
    AccountInfo.push({ 'CodiUser': CodiUser, 'NombCuen': nombreCuen, 'NumeCuen': numeCuen });
    console.log('entra');

    return this.http.post(this.apiUrlSaveAccounts, AccountInfo, httpOptions).pipe(tap((res: any) => {
      return res;
    }));
  }
}

