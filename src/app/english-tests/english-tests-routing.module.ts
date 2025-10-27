import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnglishTestsPage } from './english-tests.page';

const routes: Routes = [
  {
    path: '',
    component: EnglishTestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnglishTestsPageRoutingModule {}
