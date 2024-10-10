import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntronotasPage } from './intronotas.page';

const routes: Routes = [
  {
    path: '',
    component: IntronotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntronotasPageRoutingModule {}
