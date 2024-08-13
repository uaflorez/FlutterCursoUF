import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ServiceService } from '../../services/service.service';
import { Column, GridOption } from 'angular-slickgrid';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

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
    this.CDAccounts.push({ id: 'NombCuent', name: 'Nombre', field: 'NombCuen', sortable: true, filterable: true });
    
    console.log('ngOnInit');
  }

  fnGetAccounts(){
    this.data.fnGetAccounts(this.codiUser).subscribe({next: res => {
        this.lAccounts = res;
        this.dsAccounts = res;
    }})
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

}
