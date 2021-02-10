import { Component, Input, OnInit } from '@angular/core';
import { ExchangeRateService } from '../services/exchange-rate.service';
import { AuthService } from '../services/auth.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-exchange-rate-operation',
  templateUrl: './exchange-rate-operation.component.html',
  styleUrls: ['./exchange-rate-operation.component.css']
})
export class ExchangeRateOperationComponent implements OnInit {

  response: any = {
  };

  request = {
    origen: 'PEN',
    destino: 'EUR',
    monto: 10.0
  };

  constructor(
    private exchangeRateService: ExchangeRateService,
    private authService: AuthService) {
    }

  ngOnInit(): void {
  }

  calculate() {
    console.log(this.request);
    this.authService
      .getJwt('exchange-rate-operation')
      .pipe(mergeMap(jwt => this.exchangeRateService.exchangeRate(this.request, jwt)))
      .subscribe(result => this.response = result);
  }

}
