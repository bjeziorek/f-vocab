import { Component } from '@angular/core';

type PossibleAnswers = 
'qui'|
'pour lequel' |
'pour laquelle'|
'dans lequel'|
'dans laquelle'
; 
type Question = {
  fullAnswer: string;
  emptyAnswer: string;
  rightAnswer: PossibleAnswers;
  translation: string;
}

@Component({
  selector: 'app-lequel',
  templateUrl: './lequel.component.html',
  styleUrls: ['./lequel.component.scss']
})
export class LequelComponent {
  public currentQuestion: string ='uzupełnij pytanie!';
  public questionAnswersTranslationSet: Question[] = [
    {
      fullAnswer: "C'est un chat, qui dort.",
      emptyAnswer: "C'est un chat, ___ dort.",
      translation: "To jest kot, który śpi.",
      rightAnswer: "qui",
    },
    {
      fullAnswer: "Voici le livre pour lequel j’ai payé trop cher.",
      emptyAnswer: "Voici le livre ___ j’ai payé trop cher.",
      translation: "Oto książka, za którą zapłaciłem za dużo.",
      rightAnswer: "pour lequel",
    },
    {
      fullAnswer: "La maison dans laquelle j’ai grandi est très vieille.",
      emptyAnswer: "La maison ___ j’ai grandi est très vieille.",
      translation: "Dom, w którym dorastałem, jest bardzo stary.",
      rightAnswer: "dans laquelle",
    },
  
  
  ];
  public currentAnswer: string = 'uzupełnij odpowiedź!';
  public answers: string [] = [
    'qui',
    'lequel',
    'laquelle'
  ];
  
}
