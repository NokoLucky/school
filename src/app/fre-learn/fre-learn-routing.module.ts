import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreLearnPage } from './fre-learn.page';

const routes: Routes = [
  {
    path: '',
    component: FreLearnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreLearnPageRoutingModule {}
