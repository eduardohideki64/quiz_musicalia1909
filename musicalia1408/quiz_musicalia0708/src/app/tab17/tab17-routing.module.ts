import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab17Page } from './tab17.page';

const routes: Routes = [
  {
    path: '',
    component: Tab17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab17PageRoutingModule {}
