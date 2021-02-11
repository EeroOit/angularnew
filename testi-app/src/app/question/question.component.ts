import { Component, OnInit } from '@angular/core';
import { Question} from '../models/question.module';
import {Feedback} from '../models/feedback';
import {QuestionsService} from '../models/questions.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  name = 'List of questions';
  questions2;



  questions: Question [] = [
    {id: 1, name: 'Kysymys 1'},
    {id: 2, name: 'Kysymys 2'},
    {id: 3, name: 'Kysymys 3'}
  ];



    title = 'Questions'
  feedbacks = [
    new Feedback(1, 'huono'),
    new Feedback(2, 'melko huono'),
    new Feedback(3, 'keskinkertainen'),
    new Feedback(4, 'melko hyvä'),
    new Feedback(5, 'hyvä')

  ];
  myFeedback = this.feedbacks[4];

  values = '';

  getAccountById(id): Feedback {
    return this.feedbacks.find(x => x.id === id);
  }

  onInputChange(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }



  constructor(service: QuestionsService) {
    this.questions2 = service.getQuestions();
  }

    ngOnInit(): void {
  }
}





