import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musicdodia',
  templateUrl: './musicdodia.page.html',
  styleUrls: ['./musicdodia.page.scss'],
})
export class MusicdodiaPage{

  frases: string[] = [
    "A persistência é o caminho do êxito.",
    "A coragem não é ausência do medo; é a persistência apesar do medo.",
    "Vencer não é competir com o outro. É derrotar seus inimigos interiores.",
    "Acredite em você e no seu potencial.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia."
  ];

  fraseSorteada: string = '';

  constructor() {}

  sortearFrase() {
    const indice = Math.floor(Math.random() * this.frases.length);
    this.fraseSorteada = this.frases[indice];
  }



  
  sortearFrase2() {
    const indice = Math.floor(Math.random() * this.frases.length);
    this.fraseSorteada = this.frases[indice];
  }
  sortearFrase3() {
    const indice = Math.floor(Math.random() * this.frases.length);
    this.fraseSorteada = this.frases[indice];
  }
  sortearFrase4() {
    const indice = Math.floor(Math.random() * this.frases.length);
    this.fraseSorteada = this.frases[indice];
  }

  

}
