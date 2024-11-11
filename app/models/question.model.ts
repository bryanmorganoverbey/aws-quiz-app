export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export interface QuizState {
    answered: boolean;
    selectedAnswer: number | null;
    isCorrect: boolean;
}