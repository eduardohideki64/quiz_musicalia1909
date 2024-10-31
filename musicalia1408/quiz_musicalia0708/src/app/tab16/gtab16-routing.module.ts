import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gtab16Page } from './gtab16.page';

const routes: Routes = [
  {
    path: '',
    component: Gtab16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gtab16PageRoutingModule {}
