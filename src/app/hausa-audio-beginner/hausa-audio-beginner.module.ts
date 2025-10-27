import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HausaAudioBeginnerPageRoutingModule } from './hausa-audio-beginner-routing.module';

import { HausaAudioBeginnerPage } from './hausa-audio-beginner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HausaAudioBeginnerPageRoutingModule
  ],
  declarations: [HausaAudioBeginnerPage]
})
export class HausaAudioBeginnerPageModule {}
