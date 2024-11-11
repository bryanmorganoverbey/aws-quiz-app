import { Observable } from '@nativescript/core';
import { QuizService } from './services/quiz.service';
import { EventData } from '@nativescript/core';
import { ItemEventData } from '@nativescript/core';

export class MainViewModel extends Observable {
    private quizService: QuizService;

    constructor() {
        super();
        this.quizService = new QuizService();
    }

    get currentQuestion() {
        return this.quizService.currentQuestion;
    }

    get quizState() {
        return this.quizService.quizState;
    }

    get questionCounter() {
        return `Question ${this.quizService.currentQuestionNumber} of ${this.quizService.totalQuestions}`;
    }

    onAnswerSelect(args: ItemEventData) {
        if (this.quizState.answered) return;
        const index = args.index;
        this.quizService.selectAnswer(index);
        this.notifyPropertyChange('quizState', this.quizState);
        this.notifyPropertyChange('currentQuestion', this.currentQuestion);
    }

    onNextQuestion() {
        this.quizService.nextQuestion();
        this.notifyPropertyChange('currentQuestion', this.currentQuestion);
        this.notifyPropertyChange('quizState', this.quizState);
        this.notifyPropertyChange('questionCounter', this.questionCounter);
    }

    getOptionClass(index: number): string {
        const baseClass = 'option ';

        if (!this.quizState.answered) {
            return baseClass;
        }

        if (index === this.currentQuestion.correctAnswer) {
            return baseClass + 'option-correct';
        }

        if (index === this.quizState.selectedAnswer && index !== this.currentQuestion.correctAnswer) {
            return baseClass + 'option-incorrect';
        }

        return baseClass;
    }
}