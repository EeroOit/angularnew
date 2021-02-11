export class Feedbackitem {
  question: string;
  answer: string;
  answerList: Array<string>;

  constructor(value?: string) {
    this.question = value;
    let answerList;
    answerList = ['Ei vielä arvosteltu', 'Huono', 'OK', 'Hyvä'];
    this.answer = answerList [0];
  }

}
