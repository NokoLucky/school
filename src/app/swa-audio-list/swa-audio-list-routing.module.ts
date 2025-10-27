import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwaAudioListPage } from './swa-audio-list.page';

const routes: Routes = [
  {
    path: '',
    component: SwaAudioListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwaAudioListPageRoutingModule {}
