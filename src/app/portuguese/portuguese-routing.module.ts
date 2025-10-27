import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortuguesePage } from './portuguese.page';

const routes: Routes = [
  {
    path: '',
    component: PortuguesePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortuguesePageRoutingModule {}
