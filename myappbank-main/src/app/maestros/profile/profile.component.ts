import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy{

  constructor(private data: DataService) { }

  ngOnInit(): void {
    console.log("OnInit");
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


}
