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
      question: 'Qual acorde é esse?',
      options: ['B', 'D', 'A', 'G'],
      answer: 3,
      image: '../../assets/icon/solmaior.jpg', 
      feedbackCorrect: 'Parabéns! Você acertou!',
      feedbackIncorrect: 'Ops! Resposta Correta é Sol. Vá para proxima pergunta',
    },
    {
      question: 'Qual acorde é esse?',
      options: ['D', 'A', 'C', 'F'],
      image: '../../assets/icon/lalala.jpg', 
      answer: 1,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! Resposta Correta é Dó e SólBemol, sua quarta aumentada. Vá para proxima pergunta',
    },
    {
      question: 'Os acordes vistos até agora são:',
      options: ['Menores', 'Diminutos', 'Tríades', 'Maiores',],
      image: '../../assets/icon/acordesss.jpg', 
      answer: 3,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! A resposta é "a base para os acordes". Vá para proxima pergunta',
    },
    {
      question: 'Qual cifra está incorreta?',
      options: ['C/Dó', 'A/Lá', 'B/Mi', 'F/Fá'],
      image: '../../assets/icon/cifrass.png', 
      answer: 2,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! Resposta Correta é 3 menor e 5 bemol Vá para proxima pergunta',
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