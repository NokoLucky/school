import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwaLearnPage } from './swa-learn.page';

const routes: Routes = [
  {
    path: '',
    component: SwaLearnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwaLearnPageRoutingModule {}
