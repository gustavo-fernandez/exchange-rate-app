import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(private http: HttpClient) { }

  findAll(jwt: string) {
    return this.http.get<any[]>(`/api/exchange-rate`, { headers: new HttpHeaders({
        Authorization: `Bearer ${jwt}`
      })
    });
  }

  exchangeRate(request: any, jwt: string) {
    return this.http.get<any>(`/api/exchange-rate/${request.monto}/${request.origen}/${request.destino}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${jwt}`
        })
    });
  }

  save(request: any, jwt: string) {
    return this.http.post<any>(`/api/exchange-rate`, request,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${jwt}`
        })
    });
  }

}
