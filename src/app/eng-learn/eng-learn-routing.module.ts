import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngLearnPage } from './eng-learn.page';

const routes: Routes = [
  {
    path: '',
    component: EngLearnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngLearnPageRoutingModule {}
