import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit11Page } from './eng-begin-unit11.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit11PageRoutingModule {}
