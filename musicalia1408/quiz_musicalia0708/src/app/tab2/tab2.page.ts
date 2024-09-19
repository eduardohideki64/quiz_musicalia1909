import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;
  quiz = [
    {
      question: 'Qual é a 5JUS de Sol?',
      options: ['Si', 'Lá', 'Ré', 'SiBemol'],
      answer: 2,
      feedbackCorrect: 'Parabéns! Você acertou!',
      feedbackIncorrect: 'Ops! Resposta Correta é Ré. Vá para proxima pergunta',
    },
    {
      question: 'Qual é um exemplo de intervalo conhecido como trítono?',
      options: ['Dó/SólBemol', 'Si/Mi', 'Lá/RéBemol', 'Sol/Si'],
      answer: 0,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! Resposta Correta é Dó e SólBemol, sua quarta aumentada. Vá para proxima pergunta',
    },
    {
      question: 'Tríades são...',
      options: ['Extensões de acordes', 'A base para os acordes', 'Três notas por corda', 'Uma separação de notas'],
      answer: 1,
      feedbackCorrect: 'Excelente! Resposta correta!',
      feedbackIncorrect: 'Ops! A resposta é "a base para os acordes". Vá para proxima pergunta',
    },
    {
      question: 'Diminutos são acordes com',
      options: ['3 Maior e 5 Maior', '3 Menor e 5 Maior', '3 Maior e 6 Aumentada', '3 Menor 5 Bemol'],
      answer: 3,
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