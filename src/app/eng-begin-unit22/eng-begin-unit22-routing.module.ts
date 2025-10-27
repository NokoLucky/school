import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit22Page } from './eng-begin-unit22.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit22PageRoutingModule {}
