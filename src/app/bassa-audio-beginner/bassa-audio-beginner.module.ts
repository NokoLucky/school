import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BassaAudioBeginnerPageRoutingModule } from './bassa-audio-beginner-routing.module';

import { BassaAudioBeginnerPage } from './bassa-audio-beginner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BassaAudioBeginnerPageRoutingModule
  ],
  declarations: [BassaAudioBeginnerPage]
})
export class BassaAudioBeginnerPageModule {}
