import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit29Page } from './eng-begin-unit29.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit29Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit29PageRoutingModule {}
