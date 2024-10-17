import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicdodiaPageRoutingModule } from './musicdodia-routing.module';

import { MusicdodiaPage } from './musicdodia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicdodiaPageRoutingModule
  ],
  declarations: [MusicdodiaPage]
})
export class MusicdodiaPageModule {}
