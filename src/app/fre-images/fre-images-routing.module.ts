import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreImagesPage } from './fre-images.page';

const routes: Routes = [
  {
    path: '',
    component: FreImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreImagesPageRoutingModule {}
