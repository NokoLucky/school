import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YorubaAudioBeginnerPageRoutingModule } from './yoruba-audio-beginner-routing.module';

import { YorubaAudioBeginnerPage } from './yoruba-audio-beginner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YorubaAudioBeginnerPageRoutingModule
  ],
  declarations: [YorubaAudioBeginnerPage]
})
export class YorubaAudioBeginnerPageModule {}
