import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit20Page } from './eng-begin-unit20.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit20PageRoutingModule {}
