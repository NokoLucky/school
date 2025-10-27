import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HausaCategoriesPage } from './hausa-categories.page';

const routes: Routes = [
  {
    path: '',
    component: HausaCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HausaCategoriesPageRoutingModule {}
