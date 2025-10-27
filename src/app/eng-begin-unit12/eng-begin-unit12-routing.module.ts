import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit12Page } from './eng-begin-unit12.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit12PageRoutingModule {}
