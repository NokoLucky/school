import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BassaReadingPage } from './bassa-reading.page';

const routes: Routes = [
  {
    path: '',
    component: BassaReadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BassaReadingPageRoutingModule {}
