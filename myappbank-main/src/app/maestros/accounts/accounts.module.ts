import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { AngularSlickgridModule, ContainerService } from 'angular-slickgrid';
import { FormsModule } from '@angular/forms';
import { MypipePipe } from '../../pipes/mypipe.pipe';

@NgModule({
  declarations: [
    AccountsComponent,
    MypipePipe
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    FormsModule,
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
 