import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public alertButtons = [
    {
      text: 'Enviar',
      handler: (data: { nome?: string; apelido?: string; idade?: number; experiencia?: string }) => {
        this.handleFormSubmit(data);
      },
    }
  ];

  public alertInputs = [
    {
      placeholder: 'Nome',
      name: 'nome',
    },
    {
      placeholder: 'Apelido',
      name: 'apelido',
      attributes: {
        maxlength: 20,
      },
    },
    {
      type: 'number',
      placeholder: 'Idade',
      name: 'idade',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'Diga um pouco sobre o sua experiencia com o App:',
      name: 'experiencia',
    },
  ];

  submittedData: any;

  handleFormSubmit(data: { nome?: string; apelido?: string; idade?: number; experiencia?: string }) {
    this.submittedData = data; // Armazena os dados dos inputs
  }
}
