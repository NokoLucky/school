import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwaAudioAdvancedPage } from './swa-audio-advanced.page';

const routes: Routes = [
  {
    path: '',
    component: SwaAudioAdvancedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwaAudioAdvancedPageRoutingModule {}
