import { Component, OnInit } from '@angular/core';
import {Feedbackitem} from '../models/feedbackitem';
import {Feedback} from '../models/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackItemArray: Array<Feedbackitem> =
    [ new Feedbackitem('Kysymys 1'),
      new Feedbackitem('Kysymys 2'),
      new Feedbackitem('Kysymys 3')];

  feedbacks = [
    new Feedback(1, 'huono'),
    new Feedback(2, 'melko huono'),
    new Feedback(3, 'keskinkertainen'),
    new Feedback(4, 'melko hyvä'),
    new Feedback(5, 'hyvä')

  ];




  constructor() { }

  ngOnInit() {
  }

}
