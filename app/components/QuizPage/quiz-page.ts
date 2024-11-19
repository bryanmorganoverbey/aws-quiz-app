import { EventData, Page } from '@nativescript/core';
import { QuizPageView } from './quiz-page-view';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new QuizPageView();
}
