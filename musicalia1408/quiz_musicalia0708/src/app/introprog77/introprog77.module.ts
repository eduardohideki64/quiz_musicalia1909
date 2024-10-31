import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Introprog77PageRoutingModule } from './introprog77-routing.module';

import { Introprog77Page } from './introprog77.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Introprog77PageRoutingModule
  ],
  declarations: [Introprog77Page]
})
export class Introprog77PageModule {}
