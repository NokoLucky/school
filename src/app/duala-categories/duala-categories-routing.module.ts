import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DualaCategoriesPage } from './duala-categories.page';

const routes: Routes = [
  {
    path: '',
    component: DualaCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DualaCategoriesPageRoutingModule {}
