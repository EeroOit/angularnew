import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import {RouterModule} from '@angular/router';
import {AppRouting} from './app-routing';
import { CalculatorComponent } from './calculator/calculator.component';
import { QuestionComponent } from './question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatSliderModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import {MustMatchDirective} from './models/must-match.directive';
import {CurrencyComponent} from './currency/currency.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {ReactiveRegistrationformComponent} from './reactive-registrationform/reactive-registrationform.component';
import {QuestionsService} from './models/questions.service';
import { CinemaComponent } from './cinema/cinema.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    CalculatorComponent,
    QuestionComponent,
    FeedbackComponent,
    RegistrationformComponent,
    MustMatchDirective,
    CurrencyComponent,
    MainNavComponent,
    ReactiveRegistrationformComponent,
    CinemaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRouting,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [ QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
