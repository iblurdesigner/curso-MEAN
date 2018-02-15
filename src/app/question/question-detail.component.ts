import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html'
})

export class QuestionDetailComponent {
  question: Question = new Question (
    'Esta es una nueva preguta sobre Android',
    'Miren tengo una duda sobre una aplicacion que estoy escribiendo para Android...',
    new Date,
    'devicon-android-plain'
  );
}
