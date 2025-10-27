import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwaAudioBeginnerPage } from './swa-audio-beginner.page';

const routes: Routes = [
  {
    path: '',
    component: SwaAudioBeginnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwaAudioBeginnerPageRoutingModule {}
