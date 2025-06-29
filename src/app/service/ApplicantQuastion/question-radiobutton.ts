import { QuestionBase } from './question-base';

export class radiobuttonQuestion extends QuestionBase<string> {
  override controlType = 'radiobutton';
}
