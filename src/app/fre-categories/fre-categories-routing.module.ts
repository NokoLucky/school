import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreCategoriesPage } from './fre-categories.page';

const routes: Routes = [
  {
    path: '',
    component: FreCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreCategoriesPageRoutingModule {}
