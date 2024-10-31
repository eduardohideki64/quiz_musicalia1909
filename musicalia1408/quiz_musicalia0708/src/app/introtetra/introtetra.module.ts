import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntrotetraPageRoutingModule } from './introtetra-routing.module';

import { IntrotetraPage } from './introtetra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntrotetraPageRoutingModule
  ],
  declarations: [IntrotetraPage]
})
export class IntrotetraPageModule {}
