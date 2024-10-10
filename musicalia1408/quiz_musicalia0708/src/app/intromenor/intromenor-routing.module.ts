import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntromenorPage } from './intromenor.page';

const routes: Routes = [
  {
    path: '',
    component: IntromenorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntromenorPageRoutingModule {}
