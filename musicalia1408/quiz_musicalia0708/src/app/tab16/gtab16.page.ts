import { Component } from '@angular/core';

@Component({
  selector: 'app-gtab16',
  templateUrl: 'gtab16.page.html',
  styleUrls: ['gtab16.page.scss']
})
export class Gtab16Page {
  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;
  quiz = [
    {
      question: 'Qual progressão de acordes é comum na música popular, utilizando acordes de sétima?',
      options: ['a) Cmaj7 → Fmaj7 → G7 → Cmaj7', 'b) C7 → Dm7 → G7 → Cmaj7', 'c) Am7 → D7 → G7 → Cmaj7', 'd) C7 → G7 → Fmaj7 → C7'],
      answer: '1',
      image: '../../assets/icon/violao.webp', 
      feedbackCorrect: 'Parabéns! Você acertou!',
      feedbackIncorrect: 'Ops! Resposta Correta é B.',
    },
    {
      question: 'Em uma progressão de acordes em tonalidade de Dó maior, qual acorde de sétima normalmente resolve para o acorde de tônico (C)?',
      options: ['a) Dm7', 'b) G7', 'c) Fmaj7', 'd) Am7'],
      image: '../../assets/icon/acordes-com-setima.jpg', 
      answer: 1,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! Resposta Correta é a segunda opção, pois sol exerce o papel de dominante.',
    },
    {
      question: 'Em uma progressão típica ii - V - I em tonalidade maior, qual é o acorde de sétima que aparece no acorde V (dominante)?',
      options: ['a) Cmaj7', 'b) Dm7', 'c) G7', 'd) Fmaj7'],
      image: '../../assets/icon/campo.webp', 
      answer: 2,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! A resposta é G7, o quinto grau do C.H de Dó',
    },
    {
      question: 'Qual das seguintes progressões é uma típica progressão de acordes em jazz?',
      options: ['a) Cmaj7 → Am7 → Dm7 → G7', 'b) C7 → G7 → Dm7 → Fmaj7', 'c) Cmaj7 → G7 → Dm7 → E7', 'd) C7 → Fmaj7 → G7 → Cmaj7'],
      image: '../../assets/icon/braco.jpg', 
      answer: 0,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! Resposta Correta é A.',
    },
    // Adicione mais perguntas com feedback personalizado
  ];

  answer(option: number) {
    if (this.showAnswer) {
      return; // Impede que o usuário responda novamente
    }

    if (option === this.quiz[this. perguntaAtual].answer) {
      this.score++;
      this.correct = true;
    } else {
      this.correct = false;
    }
    this.showAnswer = true;
  }

  nextQuestion() {
    this.perguntaAtual ++;
    this.showAnswer = false;
  }
}