import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HausaAudioListPage } from './hausa-audio-list.page';

const routes: Routes = [
  {
    path: '',
    component: HausaAudioListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HausaAudioListPageRoutingModule {}
