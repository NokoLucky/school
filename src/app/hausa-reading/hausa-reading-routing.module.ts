import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HausaReadingPage } from './hausa-reading.page';

const routes: Routes = [
  {
    path: '',
    component: HausaReadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HausaReadingPageRoutingModule {}
