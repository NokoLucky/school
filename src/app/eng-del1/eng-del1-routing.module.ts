import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngDel1Page } from './eng-del1.page';

const routes: Routes = [
  {
    path: '',
    component: EngDel1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngDel1PageRoutingModule {}
