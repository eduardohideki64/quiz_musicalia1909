import { Component } from '@angular/core';

@Component({
  selector: 'app-tab15',
  templateUrl: 'tab15.page.html',
  styleUrls: ['tab15.page.scss']
})
export class Tab15Page {
  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;
  quiz = [
    {
      question: 'Qual é a estrutura de um acorde de sétima maior?',
      options: ['A) Tônica, terça maior, quinta justa, sétima menor', 'B) Tônica, terça maior, quinta justa, sétima maior', 'C) Tônica, terça menor, quinta diminuta, sétima menor', 'D) Tônica, terça menor, quinta justa, sétima maior'],
      answer: 1,
      image: '../../assets/icon/tetrade.jpg', 
      feedbackCorrect: 'Parabéns! Você acertou!',
      feedbackIncorrect: 'Ops! Resposta Correta é D,,G,C. Vá para proxima pergunta',
    },
    {
      question: 'Por que alguns acordes são menores em uma progressão?',
      options: ['Para se adequar ao grau do C.H que está ', 'Trazer uma sonoridade mais triste', 'Não há acordes menores',],
      image: '../../assets/icon/dmenor.png', 
      answer: 0,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! Resposta Correta é a primeira opção. Vá para proxima pergunta',
    },
    {
      question: 'Qual acorde é o 6 grau de Dó Maior?',
      options: ['Bm', 'G', 'F', 'Am',],
      image: '../../assets/icon/campo.webp', 
      answer: 3,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! A resposta é Am, seu relativo menor. Vá para proxima pergunta',
    },
    {
      question: 'Qual a função da V(quinta) na progressão?',
      options: ['Tensionar para resolver na tonica', 'Ser o acorde tonica', 'Ser sempre menor'],
      image: '../../assets/icon/braco.jpg', 
      answer: 0,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! Resposta Correta é tensionar, para assim reseolver na tonica.',
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