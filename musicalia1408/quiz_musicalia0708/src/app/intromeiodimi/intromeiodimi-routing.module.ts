import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntromeiodimiPage } from './intromeiodimi.page';

const routes: Routes = [
  {
    path: '',
    component: IntromeiodimiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntromeiodimiPageRoutingModule {}
