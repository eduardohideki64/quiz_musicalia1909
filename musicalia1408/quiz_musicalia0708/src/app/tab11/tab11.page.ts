import { Component } from '@angular/core';

@Component({
  selector: 'app-tab11',
  templateUrl: 'tab11.page.html',
  styleUrls: ['tab11.page.scss']
})
export class Tab11Page {
  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;
  quiz = [
    {
      question: 'Qual é a configuração de uma tríade maior?',
      options: ['T,2,4', 'T,3m,5', 'T,3,5', '2,T,5'],
      answer: 2,
      image: '../../assets/icon/triademaior.png', 
      feedbackCorrect: 'Parabéns! Você acertou!',
      feedbackIncorrect: 'Ops! Resposta Correta é Tonica, terça e quinta.',
    },
    {
      question: 'Qual seria a tríade de D maior?',
      options: ['D,F#,A ', 'D,E,A', 'D,F,A','F, E, D'],
      image: '../../assets/icon/formacao.png', 
      answer: 0,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! Resposta Correta é D, F#, A. Vá para proxima pergunta',
    },
    {
      question: 'As tríades são:',
      options: ['Extensões de acordes', 'Esqueleto dos acordes', 'Escalas', 'Modos',],
      image: '../../assets/icon/violaooo.jpg', 
      answer: 1,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! A resposta é Esqueleto dos Acordes, já que elas são a base da harmonia dos acordes.',
    },
    {
      question: 'Qual seria a triade de E maior ',
      options: ['E,G#,B', 'E,A,C', 'E,C,E' , 'E,G,A'],
      image: '../../assets/icon/mimaior.webp', 
      answer: 0,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! Resposta Correta é E,G# e B, tonica, terça e quinta.',
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