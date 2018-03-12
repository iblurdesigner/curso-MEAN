import { Answer } from '../answer/answer.model';

export class Question {
  _id?: string;
  title: string;
  description: string;
  createAt?: Date;
  icon?: string;
  answers: Answer[];

  constructor(
    title: string,
    description: string,
    createAt?: Date,
    icon?: string
  ) {
      this._id = '1';
      this.title = title;
      this.description = description;
      this.createAt = createAt;
      this.icon = icon;
      this.answers = [];
  }
}
