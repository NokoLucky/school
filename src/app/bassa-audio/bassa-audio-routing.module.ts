import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BassaAudioPage } from './bassa-audio.page';

const routes: Routes = [
  {
    path: '',
    component: BassaAudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BassaAudioPageRoutingModule {}
