import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngDel3Page } from './eng-del3.page';

const routes: Routes = [
  {
    path: '',
    component: EngDel3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngDel3PageRoutingModule {}
