import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroprogPage } from './introprog.page';

const routes: Routes = [
  {
    path: '',
    component: IntroprogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroprogPageRoutingModule {}
