import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicdodiaPage } from './musicdodia.page';

const routes: Routes = [
  {
    path: '',
    component: MusicdodiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicdodiaPageRoutingModule {}
