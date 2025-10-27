import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwaAudioIntermediatePage } from './swa-audio-intermediate.page';

const routes: Routes = [
  {
    path: '',
    component: SwaAudioIntermediatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwaAudioIntermediatePageRoutingModule {}
