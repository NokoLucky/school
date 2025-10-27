import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit28Page } from './eng-begin-unit28.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit28Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit28PageRoutingModule {}
