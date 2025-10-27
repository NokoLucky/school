import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit30Page } from './eng-begin-unit30.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit30Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit30PageRoutingModule {}
