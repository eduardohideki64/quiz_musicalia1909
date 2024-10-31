import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntrodiminuPageRoutingModule } from './introdiminu-routing.module';

import { IntrodiminuPage } from './introdiminu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntrodiminuPageRoutingModule
  ],
  declarations: [IntrodiminuPage]
})
export class IntrodiminuPageModule {}
