import { Component } from '@angular/core';

@Component({
  selector: 'app-tab18',
  templateUrl: 'tab18.page.html',
  styleUrls: ['tab18.page.scss']
})
export class Tab18Page {
  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;
  quiz = [
    {
      question: 'Qual é a fórmula do acorde meio diminuto?',
      options: ['a) Tônica, terça maior, quinta justa, sétima maior', 'b) Tônica, terça menor, quinta diminuta, sétima menor', 'c) Tônica, terça maior, quinta diminuta, sétima maior', 'd) Tônica, terça maior, quinta justa, sétima menor'],
      answer: 1,
      image: '../../assets/icon/violao.webp', 
      feedbackCorrect: 'Parabéns! Você acertou!',
      feedbackIncorrect: 'Ops! Resposta Correta é B',
    },
    {
      question: 'Como é notado o acorde meio diminuto de Dó?(cifra)',
      options: ['a) Cdim7', 'b) Cø', 'c) Cm7','d) Cmaj7'],
      image: '../../assets/icon/dimidimi.png', 
      answer: 1,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! Resposta Correta é B, a cifra correta de um meio-diminuto',
    },
    {
      question: 'Qual das alternativas abaixo apresenta um acorde meio diminuto?',
      options: ['a) C - E - G - B♭', 'b) C - E♭ - G♭ - B♭','c) C - G - B♭ - D','d) C - E♭ - G♭ - B'],
      image: '../../assets/icon/campo.webp', 
      answer: 1,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! A resposta é B, tendo em vista a relação intervalar. Vá para proxima pergunta',
    },
    {
      question: 'Qual função harmônica é mais comum para o acorde meio diminuto em uma progressão de jazz?',
      options: ['a) Subdominante, criando resolução para o acorde dominante', 'b) Dominante, resolvendo para o acorde tônico', 'c) Subdominante, criando tensão para o acorde tônico', 'd) Tônico, resolvendo para o acorde subdominante'],
      image: '../../assets/icon/braco.jpg', 
      answer: 0,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! Resposta Correta é a) Subdominante, criando resolução para o acorde dominante',
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