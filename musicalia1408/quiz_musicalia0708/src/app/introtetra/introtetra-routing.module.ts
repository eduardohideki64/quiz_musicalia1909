import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntrotetraPage } from './introtetra.page';

const routes: Routes = [
  {
    path: '',
    component: IntrotetraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntrotetraPageRoutingModule {}
