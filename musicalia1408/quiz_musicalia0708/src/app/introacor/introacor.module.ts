import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroacorPageRoutingModule } from './introacor-routing.module';

import { IntroacorPage } from './introacor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroacorPageRoutingModule
  ],
  declarations: [IntroacorPage]
})
export class IntroacorPageModule {}
