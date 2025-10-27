import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit19Page } from './eng-begin-unit19.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit19PageRoutingModule {}
