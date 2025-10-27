import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorCategoriesPage } from './por-categories.page';

const routes: Routes = [
  {
    path: '',
    component: PorCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorCategoriesPageRoutingModule {}
