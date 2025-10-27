import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YorubaCategoriesPage } from './yoruba-categories.page';

const routes: Routes = [
  {
    path: '',
    component: YorubaCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YorubaCategoriesPageRoutingModule {}
