import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwaCategoriesPage } from './swa-categories.page';

const routes: Routes = [
  {
    path: '',
    component: SwaCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwaCategoriesPageRoutingModule {}
