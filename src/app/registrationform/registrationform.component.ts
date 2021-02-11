import { Component, OnInit } from '@angular/core';
import {Templatedata} from '../models/templatedata';
import {MustMatchDirective} from '../models/must-match.directive';
import {MustMatch} from '../models/must-match';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {

model = new Templatedata('','','','','','','', false)


  submitted = false;
onSubmit() {
  this.submitted = true;
  console.log('this.model.name:' + this.model.firstName);
  console.log('this.model.lastName' + this.model.lastName);
  console.log('this.model.id' + this.model.id);
  console.log('this.model.username' + this.model.username);
  console.log('this.model.password' + this.model.password);







}
  constructor() { }

  ngOnInit() {
  }

}
