import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit15Page } from './eng-begin-unit15.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit15PageRoutingModule {}
