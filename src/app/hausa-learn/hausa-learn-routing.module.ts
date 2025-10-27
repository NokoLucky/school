import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HausaLearnPage } from './hausa-learn.page';

const routes: Routes = [
  {
    path: '',
    component: HausaLearnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HausaLearnPageRoutingModule {}
