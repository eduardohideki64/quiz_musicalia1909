import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab18PageRoutingModule } from './tab18-routing.module';

import { Tab18Page } from './tab18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab18PageRoutingModule
  ],
  declarations: [Tab18Page]
})
export class Tab18PageModule {}
