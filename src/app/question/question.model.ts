export class Question {
  title: string;
  description: string;
  createAt?: Date;
  icon?: string;

  constructor(
    title: string;
    description: string;
    createAt?: Date;
    icon?: string;
  ) {
    this.title= title;
    this.description= description;
    this.createAt= createAt;
    this.icon= icon;
  }
}
