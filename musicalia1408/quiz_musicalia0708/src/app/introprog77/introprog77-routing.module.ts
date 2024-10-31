import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Introprog77Page } from './introprog77.page';

const routes: Routes = [
  {
    path: '',
    component: Introprog77Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Introprog77PageRoutingModule {}
