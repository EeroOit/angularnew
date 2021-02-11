import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {DataService} from '../models/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  rate = {};
  rates = [];
  rateKeys = [];
  submitted = false;
  newForm: FormGroup;
  message;
  constructor(public dataService: DataService) {}

 ngOnInit() {
  this.newForm = new FormGroup({
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required)
  });
  this.init();
}

  get f() { return this.newForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.newForm.invalid) {
      return;
    }

  }

  /* getting the data from the api json array*/

init() {
  this.dataService.currencyRate().subscribe(
    data => {
      this.rate = data['rates'];
      this.rateKeys = Object.keys(this.rate);
      for (let i = 0; i < this.rateKeys.length; i++) {
        this.rates.push({
          name: this.rateKeys[i],
          curValue: this.rate[this.rateKeys[i]]
        });
      }
    },
    err => {
    }
  );


}
/* calculating the conversion*/

convert() {
  const from = this.newForm.controls['from'].value;
  const to = this.newForm.controls['to'].value;
  const amount = this.newForm.controls['amount'].value;
  const toIndex = _.findIndex(this.rates, rate => {
    return rate.name === to;
  });
  const fromIndex = _.findIndex(this.rates, rate => {
    return rate.name === from;
  });
  const ratio = this.rates[toIndex].curValue / this.rates[fromIndex].curValue;
  const cal = ratio * amount;
  this.message =
    amount +
    ' ' +
    this.rates[fromIndex].name +
    ' on yhtä kuin ' +
    cal.toFixed(3) +
    ' ' +
    this.rates[toIndex].name;
}


}
