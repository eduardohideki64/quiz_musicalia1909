import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab17PageRoutingModule } from './tab17-routing.module';

import { Tab17Page } from './tab17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab17PageRoutingModule
  ],
  declarations: [Tab17Page]
})
export class Tab17PageModule {}
