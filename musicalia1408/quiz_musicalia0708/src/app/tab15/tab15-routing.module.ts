import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab15Page } from './tab15.page';

const routes: Routes = [
  {
    path: '',
    component: Tab15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab15PageRoutingModule {}
