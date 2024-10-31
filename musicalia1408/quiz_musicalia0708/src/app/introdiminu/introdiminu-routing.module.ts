import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntrodiminuPage } from './introdiminu.page';

const routes: Routes = [
  {
    path: '',
    component: IntrodiminuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntrodiminuPageRoutingModule {}
