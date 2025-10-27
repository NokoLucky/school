import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YorubaAudioBeginnerPage } from './yoruba-audio-beginner.page';

const routes: Routes = [
  {
    path: '',
    component: YorubaAudioBeginnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YorubaAudioBeginnerPageRoutingModule {}
