import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab14PageRoutingModule } from './tab14-routing.module';

import { Tab14Page } from './tab14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab14PageRoutingModule
  ],
  declarations: [Tab14Page]
})
export class Tab14PageModule {}
