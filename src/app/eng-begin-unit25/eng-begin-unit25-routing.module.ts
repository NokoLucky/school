import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit25Page } from './eng-begin-unit25.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit25PageRoutingModule {}
