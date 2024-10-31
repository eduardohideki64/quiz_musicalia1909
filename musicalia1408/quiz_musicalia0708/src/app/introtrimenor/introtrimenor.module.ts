import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntrotrimenorPageRoutingModule } from './introtrimenor-routing.module';

import { IntrotrimenorPage } from './introtrimenor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntrotrimenorPageRoutingModule
  ],
  declarations: [IntrotrimenorPage]
})
export class IntrotrimenorPageModule {}
