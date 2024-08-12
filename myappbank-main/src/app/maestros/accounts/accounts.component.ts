import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ServiceService } from '../../services/service.service';
import { Column, GridOption } from 'angular-slickgrid';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent implements OnInit{

  codiUser: string = '';
  CDAccounts: Column[] = [];
  GPAccounts: GridOption = {};
  dsAccounts: any[] = [];
  lAccounts: any[] = [];
  lstrNumeCuen: any;
  
  constructor(private data: DataService, public service: ServiceService) { }
  


  ngOnInit() {
    this.GPAccounts = {
      autoResize: {container: '#idgridAccounts', rightPadding: 5},
      enableAutoResize: true,
      gridHeight: 300,
      autoFitColumnsOnFirstLoad: false,
      enableAutoSizeColumns: false,
      autosizeColumnsByCellContentOnFirstLoad: true,
      enableAutoResizeColumnsByCellContent: true
    };
    this.CDAccounts.push({id: 'NumeCuent', name:'Número', field: 'NumeCuen', sortable: true, filterable: true});
    this.CDAccounts.push({id: 'NombCuent', name:'Nombre', field: 'NombCuen', sortable: true, filterable: true});
  
  }

  fnGetAccounts(){
    this.data.fnGetAccounts(this.codiUser).subscribe({next: res => {
        this.lAccounts = res;
        this.dsAccounts = res;
    }})
  }
}
