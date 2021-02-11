import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component';
import {CurrencyComponent} from './currency/currency.component';

const  routes: Routes = [
  { path: 'calc', component: CalculatorComponent},
  {path: 'currency', component: CurrencyComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
