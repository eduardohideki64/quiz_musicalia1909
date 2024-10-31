import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab15PageRoutingModule } from './tab15-routing.module';

import { Tab15Page } from './tab15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab15PageRoutingModule
  ],
  declarations: [Tab15Page]
})
export class Tab15PageModule {}
