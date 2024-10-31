import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntromeiodimiPageRoutingModule } from './intromeiodimi-routing.module';

import { IntromeiodimiPage } from './intromeiodimi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntromeiodimiPageRoutingModule
  ],
  declarations: [IntromeiodimiPage]
})
export class IntromeiodimiPageModule {}
