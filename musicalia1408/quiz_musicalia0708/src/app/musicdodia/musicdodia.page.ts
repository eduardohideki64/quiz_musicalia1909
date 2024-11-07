import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musicdodia',
  templateUrl: './musicdodia.page.html',
  styleUrls: ['./musicdodia.page.scss'],
})

export class MusicdodiaPage {
  // Suas listas de frases
  frases: string[] = [
    '"Evidências" - Chitãozinho & Xororó',
    '"Fio de Cabelo" - Chitãozinho & Xororó',
    '"Ainda Ontem Chorei de Saudade" - João Mineiro & Marciano',
    '"Sertanejo do Nosso Jeito" - Jorge & Mateus',
    '"Larga de Ser Teimosa" - Simone & Simaria'
  ];

  fraseSorteada: string = '';

  frases2: string[] = [
    '"Smoke on the Water" - Deep Purple',
    '"Sunshine of Your Love" - Cream',
    '"Iron Man" - Black Sabbath',
    '"Day Tripper" - The Beatles',
    '"Black Dog" - Led Zeppelin'
  ];

  fraseSorteada2: string = '';

  frases3: string[] = [
    '"Trem das Onze" - Adoniran Barbosa',
    '"O Leãozinho" - Caetano Veloso',
    '"Cais" - Milton Nascimento',
    '"O Mundo é um Moinho" - Cartola',
    '"Asa Branca" - Luiz Gonzaga'
  ];

  fraseSorteada3: string = '';

  frases4: string[] = [
    '"Shape of You" - Ed Sheeran',
    '"Someone Like You" - Adele',
    '"Happy" - Pharrell Williams',
    '"Bad Guy" - Billie Eilish',
    '"Take Me to Church" - Hozier'
  ];

  fraseSorteada4: string = '';

  constructor() {}

  // Métodos para sortear as frases
  sortearFrase() {
    const indice = Math.floor(Math.random() * this.frases.length);
    this.fraseSorteada = this.frases[indice];
  }

  sortearFrase2() {
    const indice = Math.floor(Math.random() * this.frases2.length);
    this.fraseSorteada2 = this.frases2[indice];
  }

  sortearFrase3() {
    const indice = Math.floor(Math.random() * this.frases3.length);
    this.fraseSorteada3 = this.frases3[indice];
  }

  sortearFrase4() {
    const indice = Math.floor(Math.random() * this.frases4.length);
    this.fraseSorteada4 = this.frases4[indice];
  }


}
