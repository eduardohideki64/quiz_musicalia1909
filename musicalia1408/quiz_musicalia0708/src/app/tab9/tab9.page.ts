import { Component } from '@angular/core';

@Component({
  selector: 'app-tab9',
  templateUrl: 'tab9.page.html',
  styleUrls: ['tab9.page.scss']
})
export class Tab9Page {
  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;
  quiz = [
    {
      question: 'Qual a diferença entre um acorde Maior e Menor?',
      options: ['Uma nota, a terça', 'O uso de pestana', 'O modelo do acorde', 'A nota principal'],
      answer: 0,
      image: '../../assets/icon/menores.webp', 
      feedbackCorrect: 'Parabéns! Você acertou!',
      feedbackIncorrect: 'Ops! Resposta Correta é a alteração de apenas uma nota. Vá para proxima pergunta',
    },
    {
      question: 'Que acorde é este?',
      options: ['Em', 'Am', 'Cm', 'Fm'],
      image: '../../assets/icon/lamenor.jpg', 
      answer: 1,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! Resposta Correta é Am. Vá para proxima pergunta',
    },
    {
      question: 'Qual dos acordes abaixo é o segundo grau de Dó Maior:',
      options: ['B', 'Bb', 'F#', 'Dm',],
      image: '../../assets/icon/pianinho.png', 
      answer: 3,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! A resposta é Dm. Vá para proxima pergunta',
    },
    {
      question: 'Qual nota é mudada na mudança de F para Fm',
      options: ['A para B', 'A para Ab', 'A para G', 'G para A'],
      image: '../../assets/icon/famaior.webp', 
      answer: 2,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! A resposta é A para Ab, abaixando meio tom. Vá para proxima pergunta',
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