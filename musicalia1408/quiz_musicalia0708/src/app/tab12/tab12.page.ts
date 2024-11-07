import { Component } from '@angular/core';

@Component({
  selector: 'app-tab12',
  templateUrl: 'tab12.page.html',
  styleUrls: ['tab12.page.scss']
})
export class Tab12Page {
  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;
  quiz = [
    {
      question: 'Qual é a fórmula de intervalos para formar uma tríade menor a partir da tônica?',
      options: ['A) Tônica, terça maior, quinta justa', 'B) Tônica, terça menor, quinta aumentada', 'C) Tônica, terça menor, quinta justa', 'D) Tônica, terça maior, quinta diminuta'],
      answer: 2,
      image: '../../assets/icon/triadesss.jpg', 
      feedbackCorrect: 'Parabéns! Você acertou!',
      feedbackIncorrect: 'A resposta correta é a letra C.',
    },
    {
      question: 'Qual é a quinta de uma tríade menor formada a partir de Sol (G)?',
      options: ['a) Ré', 'b) Fá (F)', 'c) Si bemol (Bb)', 'd) Dó (C)',],
      image: '../../assets/icon/solsol.webp', 
      answer: 0,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! Resposta Correta é D, mesmo a tríade sendo menor, a quinta não muda neste caso',
    },
    {
      question: 'Qual das alternativas abaixo representa a tríade menor de Lá (A)?',
      options: ['a) Lá, Dó sustenido, Mi', 'b) Lá, Dó, Mi' ,'c) Lá, Dó, Fá' ,'d) Lá, Dó sustenido, Fá'],
      image: '../../assets/icon/campo.webp', 
      answer: 1,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! A resposta é B, pois C#, sua terça, meio tom abaixo, é dó.',
    },
    {
      question: 'Qual é a afirmação correta?',
      options: ['a) A terça é maior na tríade menor',  'b) A terça é menor na tríade maior',  'c) A quinta é diminuta na tríade menor', 'd) A terça é maior na tríade maior.'],
      image: '../../assets/icon/acustic.jpg', 
      answer: 3,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: ' A única que condiz co m a veracidade é a D, a terça é maior na tríade maior ',
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