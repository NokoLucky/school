import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngCategoriesPage } from './eng-categories.page';

const routes: Routes = [
  {
    path: '',
    component: EngCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngCategoriesPageRoutingModule {}
