import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BassaAudioBeginnerPage } from './bassa-audio-beginner.page';

const routes: Routes = [
  {
    path: '',
    component: BassaAudioBeginnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BassaAudioBeginnerPageRoutingModule {}
