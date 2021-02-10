import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getJwt(roles: string): Observable<string> {
    return this.http
      .get<any>(`/api/get-jwt?roles=${roles}`)
      .pipe(map(response => response.accessToken));
  }
}
