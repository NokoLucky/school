import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BassaCategoriesPage } from './bassa-categories.page';

const routes: Routes = [
  {
    path: '',
    component: BassaCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BassaCategoriesPageRoutingModule {}
