import { Component } from '@angular/core';

@Component({
  selector: 'app-tab13',
  templateUrl: 'tab13.page.html',
  styleUrls: ['tab13.page.scss']
})
export class Tab13Page {
  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;
  quiz = [
    {
      question: 'Qual é a estrutura de um acorde diminuto',
      options: ['T, 3m, 5', 'T, 3, 5', 'T, 3m, 5Dim', 'T, 3, 5Aum'],
      answer: 2,
      image: '../../assets/icon/violao.webp', 
      feedbackCorrect: 'Parabéns! Você acertou!',
      feedbackIncorrect: 'Ops! Resposta Correta é T, 3m e 5Dim',
    },
    {
      question: 'Qual é a principal característica do acorde diminuto?',
      options: ['a) A presença de uma terça maior e uma quinta justa', 'b) A presença de uma terça maior e uma quinta aumentada',  'c) A presença de uma terça menor e uma quinta diminuta', 'd) A presença de uma terça maior e uma quinta diminuta'],
      image: '../../assets/icon/dodiminuto.png', 
      answer: 0,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'A resposta correta é a letra C.',
    },
    {
      question: 'Em qual de seus formatos o acorde diminuto pode ser encontrado no ciclo das quartas e quintas?',
      options: ['a) Acorde diminuto com inversões intervalares fixas' ,'b) Acorde diminuto com intervalos de terças menores',  'c) Acorde diminuto que se desloca sempre uma terça maior', 'd) Acorde diminuto que se desloca sempre uma terça menor'],
      image: '../../assets/icon/campo.webp', 
      answer: 2,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! A resposta é D. Esse movimento é uma das características do acorde diminuto no ciclo de progressões harmônicas. Portanto, o acorde diminuto de C (C - Eb - Gb)',
    },
    {
      question: 'Qual acorde é o acorde diminuto de Dó (C)?',
      options: ['a) C - E - G', 'b) C - Eb - Gb', 'c) C - F - Ab', 'd) C - E - G#'],
      image: '../../assets/icon/braco.jpg', 
      answer: 1,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'A questão correta é B, pois Eb é sua terça menor e Gb sua quinta diminuta. ',
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