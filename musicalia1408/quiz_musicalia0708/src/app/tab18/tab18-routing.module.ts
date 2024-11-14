import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab18Page } from './tab18.page';

const routes: Routes = [
  {
    path: '',
    component: Tab18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab18PageRoutingModule {}
