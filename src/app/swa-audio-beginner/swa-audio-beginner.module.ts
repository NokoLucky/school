import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwaAudioBeginnerPageRoutingModule } from './swa-audio-beginner-routing.module';

import { SwaAudioBeginnerPage } from './swa-audio-beginner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwaAudioBeginnerPageRoutingModule
  ],
  declarations: [SwaAudioBeginnerPage]
})
export class SwaAudioBeginnerPageModule {}
