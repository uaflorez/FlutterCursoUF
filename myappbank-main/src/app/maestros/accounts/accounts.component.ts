import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ServiceService } from '../../services/service.service';
import { Column, GridOption } from 'angular-slickgrid';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent implements OnInit {

  codiUser: string = '';
  CDAccounts: Column[] = [];
  GPAccounts: GridOption = {};
  dsAccounts: any[] = [];
  gridAccounts: any[] = [];
  lAccounts: any[] = [];
  lstrNumeCuen: any;
  lstrNombreCuenta: string = '';
  lstrNumeroCuenta: string = '';
  mensaje: string = '';
  lBoolPreguntar: boolean = false;
  public lSubscription: Subscription = new Subscription;
  
  constructor(private data: DataService, public service: ServiceService) { }
  


  ngOnInit() {
    this.codiUser = this.service.gCodiUser;
    this.fnGetAccounts();
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
    this.CDAccounts.push({id: 'NombCuent', name: 'Nombre', field: 'NombCuen', sortable: true, filterable: true });
    
    console.log('ngOnInit');
  }

  fnGetAccounts(){
    this.data.fnGetAccounts(this.codiUser).subscribe({
      next: res => {
        this.lAccounts = res;
        this.dsAccounts = res;
        console.log('res desde login', res);
    }})
  }

  fnSaveAccount() {
    if (this.lstrNombreCuenta == '') {
      this.mensaje = 'Nombre de la cuenta no puede estar vacio';
      return;
    }
    if (this.lstrNumeroCuenta == '') {
      this.mensaje = 'Número de la cuenta no puede estar vacio';
      return;
    }

    this.lBoolPreguntar = true;
    this.lSubscription = this.service.RestObserver$.subscribe((res: any) => {
      this.lSubscription.unsubscribe();
      this.lBoolPreguntar = false;
      if (res == 'si') {
        this.fnDoSaveAccount();
      }
    });


    
  }
  fnDoSaveAccount() {
    this.data.fnSaveAccount(this.service.gCodiUser, this.lstrNombreCuenta, this.lstrNumeroCuenta).subscribe({
      next: res => {
        if (res[0].Status != 'Error') {
          this.mensaje = 'Guardado Correctamente';
        } else {
          this.mensaje = 'Error: ' + res[0].Error;
        }
        this.lAccounts = res;
        console.log('res desde login', res);
        this.codiUser = this.service.gCodiUser;
        this.fnGetAccounts();
      }
    })
    
  }

  //OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked  
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges');
  // }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');
  // }

  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');
  // }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }

  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked');
  // }

}
