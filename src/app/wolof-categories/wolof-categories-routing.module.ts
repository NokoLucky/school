import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WolofCategoriesPage } from './wolof-categories.page';

const routes: Routes = [
  {
    path: '',
    component: WolofCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WolofCategoriesPageRoutingModule {}
