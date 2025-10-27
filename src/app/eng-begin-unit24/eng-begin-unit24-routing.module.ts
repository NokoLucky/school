import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngBeginUnit24Page } from './eng-begin-unit24.page';

const routes: Routes = [
  {
    path: '',
    component: EngBeginUnit24Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngBeginUnit24PageRoutingModule {}
