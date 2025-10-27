import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit23Page } from './eng-begin-unit23.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit23PageRoutingModule {}
