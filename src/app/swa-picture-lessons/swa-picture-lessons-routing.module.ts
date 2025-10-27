import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwaPictureLessonsPage } from './swa-picture-lessons.page';

const routes: Routes = [
  {
    path: '',
    component: SwaPictureLessonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwaPictureLessonsPageRoutingModule {}
