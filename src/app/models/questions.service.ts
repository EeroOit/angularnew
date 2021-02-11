import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  getQuestions() {
    return ['question1', 'question2', 'question3',
      'question 4', 'question5' ];
  }

  constructor() { }
}
