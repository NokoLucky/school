import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit13Page } from './eng-begin-unit13.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit13PageRoutingModule {}
