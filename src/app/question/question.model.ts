import { Answer } from '../answer/answer.model';

export class Question {
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
      this.title = title;
      this.description = description;
      this.createAt = createAt;
      this.icon = icon;
      this.answers = [];
  }
}
