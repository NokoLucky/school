import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WolofAudioBeginnerPage } from './wolof-audio-beginner.page';

const routes: Routes = [
  {
    path: '',
    component: WolofAudioBeginnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WolofAudioBeginnerPageRoutingModule {}
