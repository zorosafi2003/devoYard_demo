import { QuestionBase } from './question-base';

export class checkboxQuestion extends QuestionBase<string> {
  override controlType = 'checkbox';
}
