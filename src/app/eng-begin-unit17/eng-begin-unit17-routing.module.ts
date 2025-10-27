import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit17Page } from './eng-begin-unit17.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit17PageRoutingModule {}
