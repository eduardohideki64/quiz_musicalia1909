import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntronotasPageRoutingModule } from './intronotas-routing.module';

import { IntronotasPage } from './intronotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntronotasPageRoutingModule
  ],
  declarations: [IntronotasPage]
})
export class IntronotasPageModule {}
