import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HelloworldComponent} from './helloworld/helloworld.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {RegistrationformComponent} from './registrationform/registrationform.component';
import {CurrencyComponent} from './currency/currency.component';
import {ReactiveRegistrationformComponent} from './reactive-registrationform/reactive-registrationform.component';
import {CinemaComponent} from './cinema/cinema.component';

const  routes: Routes = [
  { path: 'hello', component: HelloworldComponent},
  { path: 'calc', component: CalculatorComponent},
  {path: 'question', component: QuestionComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'registration', component: RegistrationformComponent},
  {path: 'currency', component: CurrencyComponent},
  {path: 'reactive', component: ReactiveRegistrationformComponent},
  {path: 'cinema', component: CinemaComponent},







  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
