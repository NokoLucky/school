import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit16Page } from './eng-begin-unit16.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit16PageRoutingModule {}
