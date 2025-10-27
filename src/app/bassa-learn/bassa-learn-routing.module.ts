import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BassaLearnPage } from './bassa-learn.page';

const routes: Routes = [
  {
    path: '',
    component: BassaLearnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BassaLearnPageRoutingModule {}
