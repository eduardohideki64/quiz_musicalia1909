import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroprogPageRoutingModule } from './introprog-routing.module';

import { IntroprogPage } from './introprog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroprogPageRoutingModule
  ],
  declarations: [IntroprogPage]
})
export class IntroprogPageModule {}
