import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortugueseAudioListPage } from './portuguese-audio-list.page';

const routes: Routes = [
  {
    path: '',
    component: PortugueseAudioListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortugueseAudioListPageRoutingModule {}
