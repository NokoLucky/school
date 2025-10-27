import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngRestaurantsPage } from './eng-restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: EngRestaurantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngRestaurantsPageRoutingModule {}
