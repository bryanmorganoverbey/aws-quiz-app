import { Button, EventData } from '@nativescript/core';
import { HomePageModel } from './home-page-model';



export function onStartQuiz(args: EventData) {
    const button = args.object;
    if (button instanceof Button) {
        button.page.frame.navigate("quiz-page");
    }
}


import { NavigatedData, Page } from "@nativescript/core";

export function navigatingTo(args: NavigatedData) {
  if (args.isBackNavigation) {
    return;
  }
    const page = <Page>args.object;
  page.bindingContext = new HomePageModel();

}

