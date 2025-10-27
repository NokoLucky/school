import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngDel2Page } from './eng-del2.page';

const routes: Routes = [
  {
    path: '',
    component: EngDel2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngDel2PageRoutingModule {}
