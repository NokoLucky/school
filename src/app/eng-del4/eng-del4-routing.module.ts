import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngDel4Page } from './eng-del4.page';

const routes: Routes = [
  {
    path: '',
    component: EngDel4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngDel4PageRoutingModule {}
