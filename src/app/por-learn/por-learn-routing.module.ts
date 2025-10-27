import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorLearnPage } from './por-learn.page';

const routes: Routes = [
  {
    path: '',
    component: PorLearnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorLearnPageRoutingModule {}
