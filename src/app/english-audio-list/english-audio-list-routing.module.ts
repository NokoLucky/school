import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnglishAudioListPage } from './english-audio-list.page';

const routes: Routes = [
  {
    path: '',
    component: EnglishAudioListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnglishAudioListPageRoutingModule {}
