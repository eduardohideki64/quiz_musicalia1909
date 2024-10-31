import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Acorde7PageRoutingModule } from './acorde7-routing.module';

import { Acorde7Page } from './acorde7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Acorde7PageRoutingModule
  ],
  declarations: [Acorde7Page]
})
export class Acorde7PageModule {}
