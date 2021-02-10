import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../services/exchange-rate.service';
import { AuthService } from '../services/auth.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-exchange-rate-list',
  templateUrl: './exchange-rate-list.component.html',
  styleUrls: ['./exchange-rate-list.component.css']
})
export class ExchangeRateListComponent implements OnInit {

  rates: any[] = [];

  constructor(
    private exchangeRateService: ExchangeRateService,
    private authService: AuthService) {
    }

  ngOnInit(): void {
    this.getRates();
  }

  getRates(): void  {
    this.authService
      .getJwt('exchange-rate-find-all')
      .pipe(mergeMap(jwt => this.exchangeRateService.findAll(jwt)))
      .subscribe(rates => this.rates = rates);
  }

}
