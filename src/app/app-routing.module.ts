import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateCreateComponent } from './exchange-rate-create/exchange-rate-create.component';
import { ExchangeRateListComponent } from './exchange-rate-list/exchange-rate-list.component';
import { ExchangeRateOperationComponent } from './exchange-rate-operation/exchange-rate-operation.component';

const routes: Routes = [
  {path: 'list', component: ExchangeRateListComponent},
  {path: 'update', component: ExchangeRateCreateComponent},
  {path: 'operation', component: ExchangeRateOperationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
