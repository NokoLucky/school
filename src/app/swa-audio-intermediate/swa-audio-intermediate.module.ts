import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwaAudioIntermediatePageRoutingModule } from './swa-audio-intermediate-routing.module';

import { SwaAudioIntermediatePage } from './swa-audio-intermediate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwaAudioIntermediatePageRoutingModule
  ],
  declarations: [SwaAudioIntermediatePage]
})
export class SwaAudioIntermediatePageModule {}
