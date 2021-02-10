import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeRateListComponent } from './exchange-rate-list/exchange-rate-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRateCreateComponent } from './exchange-rate-create/exchange-rate-create.component';
import { ExchangeRateOperationComponent } from './exchange-rate-operation/exchange-rate-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRateListComponent,
    ExchangeRateCreateComponent,
    ExchangeRateOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
