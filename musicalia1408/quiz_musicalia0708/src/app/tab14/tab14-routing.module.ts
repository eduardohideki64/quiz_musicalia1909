import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab14Page } from './tab14.page';

const routes: Routes = [
  {
    path: '',
    component: Tab14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab14PageRoutingModule {}
