import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BassaReadBeginnerPage } from './bassa-read-beginner.page';

const routes: Routes = [
  {
    path: '',
    component: BassaReadBeginnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BassaReadBeginnerPageRoutingModule {}
