import { Observable } from '@nativescript/core';
import { Question, QuizState } from '../models/question.model';
import { awsQuestions } from '../data/questions';

export class QuizService extends Observable {
    private currentQuestionIndex: number = 0;
    private questions: Question[] = awsQuestions;
    private _quizState: QuizState = {
        answered: false,
        selectedAnswer: null,
        isCorrect: false
    };

    get currentQuestion(): Question {
        return this.questions[this.currentQuestionIndex];
    }

    get quizState(): QuizState {
        return this._quizState;
    }

    get currentQuestionNumber(): number {
        return this.currentQuestionIndex + 1;
    }

    get totalQuestions(): number {
        return this.questions.length;
    }

    selectAnswer(index: number) {
        if (this._quizState.answered) return;

        this._quizState = {
            answered: true,
            selectedAnswer: index,
            isCorrect: index === this.currentQuestion.correctAnswer
        };
        this.notifyPropertyChange('quizState', this._quizState);
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this._quizState = {
                answered: false,
                selectedAnswer: null,
                isCorrect: false
            };
            this.notifyPropertyChange('currentQuestion', this.currentQuestion);
            this.notifyPropertyChange('quizState', this._quizState);
        }
    }
}