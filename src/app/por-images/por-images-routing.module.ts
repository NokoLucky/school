import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorImagesPage } from './por-images.page';

const routes: Routes = [
  {
    path: '',
    component: PorImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorImagesPageRoutingModule {}
