import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HausaAudioBeginnerPage } from './hausa-audio-beginner.page';

const routes: Routes = [
  {
    path: '',
    component: HausaAudioBeginnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HausaAudioBeginnerPageRoutingModule {}
