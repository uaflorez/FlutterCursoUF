import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ServiceService } from '../../services/service.service';
import { Subscription } from 'rxjs';
import { Column, GridOption } from 'angular-slickgrid';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  
  lstrType: string = '';
  lstrNumeroCuenta: string = '';
  lstrAmount: string = '';
  lstrCategoria: string = '';
  lstrDescripcion: string = '';
  lstrEstado: string = '';
  gridTransactions: any[] = [];
  GOTransactions: GridOption = {};
  transactions: any[] = [];
  columnDefinitions: Column[] = [];
  mensaje: string = '';
  lBoolPreguntar: boolean = false;
  public lSubscription: Subscription = new Subscription;

  constructor(private dataService: DataService, public service: ServiceService) { }

  ngOnInit()  {
    this.GOTransactions = {
      autoResize: {container: '#idgridTransactions', rightPadding: 5},
      enableAutoResize: true,
      gridHeight: 300,
      autoFitColumnsOnFirstLoad: false,
      enableAutoSizeColumns: false,
      autosizeColumnsByCellContentOnFirstLoad: true,
      enableAutoResizeColumnsByCellContent: true,
    };
    this.columnDefinitions = [
      { id: 'id', name: 'NumeTran', field: 'NumeTran', sortable: true },
      { id: 'Type', name: 'Type', field: 'Type', sortable: true },
      { id: 'Date', name: 'Date', field: 'Date', sortable: true },
      { id: 'Amount', name: 'Amount', field: 'Amount', sortable: true },
      { id: 'Category', name: 'Category', field: 'Category', sortable: true },
      { id: 'Description', name: 'Description', field: 'Description', sortable: true },
      { id: 'Status', name: 'Status', field: 'Status', sortable: true },
      { id: 'Balance', name: 'Balance', field: 'Balance', sortable: true },
    ];
  }

  fnSaveTransaction() {
    
    this.lBoolPreguntar = true;
    this.lSubscription = this.service.RestObserver$.subscribe((res: any) => {
      this.lSubscription.unsubscribe();
      this.lBoolPreguntar = false;
      if (res == 'si') {
        this.fnDoSaveTransaction();
      }
    });
  }

  fnDoSaveTransaction() {
    console.log("Tipo: ", this.lstrType);
    console.log("Numero de Cuenta: ", this.lstrNumeroCuenta);
    console.log("Amount: ", this.lstrAmount);
    console.log("Categoria: ", this.lstrCategoria);
    console.log("Descripcion: ", this.lstrDescripcion);
    console.log("Estado: ", this.lstrEstado);
    
    this.dataService.fnSaveTransaction(this.lstrType, this.lstrNumeroCuenta, this.lstrAmount, this.lstrDescripcion, this.lstrCategoria, this.lstrEstado).subscribe({
      next: res => {
        console.log('Datos devueltos por el servicio:', res);
        var lRow = res[0];
        for (var i in lRow) {
          if (i == 'Error') {
            this.mensaje = res[0].Error;
            return;
          }
        }
        this.transactions = res;
        this.mensaje = "Guardado con exito";
      }
    });
  }
}
