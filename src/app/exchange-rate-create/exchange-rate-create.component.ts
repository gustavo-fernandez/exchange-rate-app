import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../services/exchange-rate.service';
import { AuthService } from '../services/auth.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-exchange-rate-create',
  templateUrl: './exchange-rate-create.component.html',
  styleUrls: ['./exchange-rate-create.component.css']
})
export class ExchangeRateCreateComponent implements OnInit {

  request = {
    origen: '',
    destino: '',
    tipoDeCambio: 0.0
  };

  constructor(
    private exchangeRateService: ExchangeRateService,
    private authService: AuthService) {
    }

  ngOnInit(): void {
  }

  save() {
    console.log(this.request);
    this.authService
      .getJwt('exchange-rate-save')
      .pipe(mergeMap(jwt => this.exchangeRateService.save(
        {sourceCurrency: this.request.origen, targetCurrency: this.request.destino, rate: this.request.tipoDeCambio},
        jwt)))
      .subscribe(result => {
        console.log(result);
      });
  }

}
