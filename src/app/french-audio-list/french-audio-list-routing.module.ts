import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrenchAudioListPage } from './french-audio-list.page';

const routes: Routes = [
  {
    path: '',
    component: FrenchAudioListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrenchAudioListPageRoutingModule {}
