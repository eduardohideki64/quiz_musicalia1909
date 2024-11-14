import { Component } from '@angular/core';

@Component({
  selector: 'app-tab17',
  templateUrl: 'tab17.page.html',
  styleUrls: ['tab17.page.scss']
})
export class Tab17Page {
  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;
  quiz = [
    {
      question: 'Qual é a fórmula de um acorde de sétima maior?',
      options: ['a) Tônica, terça maior, quinta justa, sétima maior', 'b) Tônica, terça menor, quinta diminuta, sétima maior', 'c) Tônica, terça maior, quinta aumentada, sétima menor', 'd) Tônica, terça maior, quinta justa, nona maior'],
      answer: 0,
      image: '../../assets/icon/violao.webp', 
      feedbackCorrect: 'Parabéns! Você acertou!',
      feedbackIncorrect: 'Ops! Resposta Correta é A, a sétima maior está meio tom da 8.',
    },
    {
      question: 'Como é a cifra o acorde de sétima menor de Dó?',
      options: ['a) C7', 'b) Cmaj7', 'c) Cm7', 'd) C7sus4'],
      image: '../../assets/icon/acordes-com-setima.jpg', 
      answer: 0,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! Resposta Correta é a primeira opção. Sua cifra é apenas o acorde junto do 7, quando for 7 menor',
    },
    {
      question: 'Qual é a principal característica do acorde de sétima maior?',
      options: ['a) A terça menor e a quinta diminuta', 'b) A terça maior e a sétima menor', 'c) A terça maior e a sétima maior', 'd) A terça maior e a quinta diminuta',],
      image: '../../assets/icon/campo.webp', 
      answer: 2,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! A resposta é a C. Vá para proxima pergunta',
    },
    {
      question: 'Qual é a diferença principal entre um acorde de sétima maior (Cmaj7) e um acorde de sétima menor (C7)?',
      options: ['a) O acorde de sétima maior tem uma terça menor e o acorde de sétima menor tem uma terça maior.', 'b) O acorde de sétima maior tem uma quinta diminuta e o acorde de sétima menor tem uma quinta justa.', 'c) O acorde de sétima maior tem uma sétima maior e o acorde de sétima menor tem uma sétima menor.', 'd) O acorde de sétima maior tem uma terça maior e o acorde de sétima menor tem uma terça maior.'],
      image: '../../assets/icon/braco.jpg', 
      answer: 2,
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