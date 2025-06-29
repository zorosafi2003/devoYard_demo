import { QuestionBase } from './question-base';

export class textareaQuestion extends QuestionBase<string> {
  override controlType = 'textarea';
}
