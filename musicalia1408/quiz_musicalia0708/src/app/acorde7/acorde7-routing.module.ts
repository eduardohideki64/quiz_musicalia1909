import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Acorde7Page } from './acorde7.page';

const routes: Routes = [
  {
    path: '',
    component: Acorde7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Acorde7PageRoutingModule {}
