import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit27Page } from './eng-begin-unit27.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit27Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit27PageRoutingModule {}
