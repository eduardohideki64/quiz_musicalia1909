import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntrotriaPageRoutingModule } from './introtria-routing.module';

import { IntrotriaPage } from './introtria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntrotriaPageRoutingModule
  ],
  declarations: [IntrotriaPage]
})
export class IntrotriaPageModule {}
