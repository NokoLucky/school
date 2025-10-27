import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HausaReadBeginnerPage } from './hausa-read-beginner.page';

const routes: Routes = [
  {
    path: '',
    component: HausaReadBeginnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HausaReadBeginnerPageRoutingModule {}
