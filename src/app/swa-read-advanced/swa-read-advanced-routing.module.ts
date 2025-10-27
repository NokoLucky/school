import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwaReadAdvancedPage } from './swa-read-advanced.page';

const routes: Routes = [
  {
    path: '',
    component: SwaReadAdvancedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwaReadAdvancedPageRoutingModule {}
