import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSlickgridModule, ContainerService } from 'angular-slickgrid'

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';


@NgModule({
  declarations: [
    AccountsComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    AngularSlickgridModule.forRoot({
      enableCellNavigation: true,
      autoHeight: false,
      enableRowSelection: true,
      enableFiltering: true,
      gridMenu: {hideForceFitButton: true}
    })
  ],
  providers: [ContainerService]
})
export class AccountsModule { }
