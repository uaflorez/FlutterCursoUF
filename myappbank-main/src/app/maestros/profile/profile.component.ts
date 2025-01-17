import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { fromEvent } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy{
  lstrColor: string = 'white';

  constructor(private data: DataService) { }
  codiUser: string = '';
  codiUser2: string = '';
  nombUser: string = '';
  password: string = '';

  ngOnInit(): void {
    console.log("OnInit");
    const evKeyUp = fromEvent(document, 'keyup');
    const result = evKeyUp.pipe(debounceTime(300));
    result.subscribe({next: (x) => {
      var target = x.target as HTMLInputElement;
      if (target.name == 'codiUser2') {
        console.log(target);
        this.fnValidProf();
      }
    }});
  }
  ngOnDestroy(): void {
    console.log("OnDestroy");
  }

  fnGetAccounts() {
    this.data.fnGetAccounts('Pedro').subscribe({
      next: res => {
        console.log(res);
      }
    })
  }

  fnValidProf() {
    this.data.fnValidProfile(this.codiUser2).subscribe({
      next: res => {
        this.nombUser = res[0].NombUsua;
        this.password = res[0].PassUser;
        console.log(res);
      }
    })
  }
  fnFondoBlanco() {
    this.lstrColor = 'white';
  }
  fnFondoAmarillo() {
    this.lstrColor = 'yellow';
  }


}
