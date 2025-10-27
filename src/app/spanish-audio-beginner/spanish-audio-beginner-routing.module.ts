import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpanishAudioBeginnerPage } from './spanish-audio-beginner.page';

const routes: Routes = [
  {
    path: '',
    component: SpanishAudioBeginnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpanishAudioBeginnerPageRoutingModule {}
