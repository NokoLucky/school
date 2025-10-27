import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwaReadBeginnerPage } from './swa-read-beginner.page';

const routes: Routes = [
  {
    path: '',
    component: SwaReadBeginnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwaReadBeginnerPageRoutingModule {}
