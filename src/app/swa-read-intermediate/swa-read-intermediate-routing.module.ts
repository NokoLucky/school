import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwaReadIntermediatePage } from './swa-read-intermediate.page';

const routes: Routes = [
  {
    path: '',
    component: SwaReadIntermediatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwaReadIntermediatePageRoutingModule {}
