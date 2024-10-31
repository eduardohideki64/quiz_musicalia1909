import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gtab16PageRoutingModule } from './gtab16-routing.module';

import { Gtab16Page } from './gtab16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gtab16PageRoutingModule
  ],
  declarations: [Gtab16Page]
})
export class Gtab16PageModule {}
