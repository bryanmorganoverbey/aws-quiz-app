import { Observable } from '@nativescript/core';
import { Frame } from '@nativescript/core';
export class HomePageModel extends Observable {
  constructor() {
    super();

  }

  onStartQuiz() {
    Frame.topmost().navigate("quiz-page");
  }
}
