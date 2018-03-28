import { Component } from '@angular/core';

@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styles: [`
      .add-question {
        position: fixed;
        bottom: 30px;
        right: 30px;
        font-size: 24px;
      }
      .spinner {
        display: flex;
        justify-content: center;
      }
    `]
})

export class QuestionScreenComponent {

}
