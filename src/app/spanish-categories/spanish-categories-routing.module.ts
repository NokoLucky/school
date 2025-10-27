import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpanishCategoriesPage } from './spanish-categories.page';

const routes: Routes = [
  {
    path: '',
    component: SpanishCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpanishCategoriesPageRoutingModule {}
