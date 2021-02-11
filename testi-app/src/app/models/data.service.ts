import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public http: HttpClient) {}

  apiUrl = 'https://api.exchangeratesapi.io/latest?base=USD ';

  currencyRate() {
    return this.http.get(this.apiUrl);
  }
}

