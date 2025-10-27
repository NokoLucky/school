import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit18Page } from './eng-begin-unit18.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit18PageRoutingModule {}
