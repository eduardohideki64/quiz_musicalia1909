import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntromenorPageRoutingModule } from './intromenor-routing.module';

import { IntromenorPage } from './intromenor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntromenorPageRoutingModule
  ],
  declarations: [IntromenorPage]
})
export class IntromenorPageModule {}
