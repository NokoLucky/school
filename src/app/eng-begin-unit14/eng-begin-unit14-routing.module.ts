import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit14Page } from './eng-begin-unit14.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit14PageRoutingModule {}
