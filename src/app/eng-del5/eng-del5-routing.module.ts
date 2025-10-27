import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngDel5Page } from './eng-del5.page';

const routes: Routes = [
  {
    path: '',
    component: EngDel5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngDel5PageRoutingModule {}
