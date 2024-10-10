import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroacorPage } from './introacor.page';

const routes: Routes = [
  {
    path: '',
    component: IntroacorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroacorPageRoutingModule {}
