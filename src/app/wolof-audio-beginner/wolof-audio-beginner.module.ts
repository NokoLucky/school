import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WolofAudioBeginnerPageRoutingModule } from './wolof-audio-beginner-routing.module';

import { WolofAudioBeginnerPage } from './wolof-audio-beginner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WolofAudioBeginnerPageRoutingModule
  ],
  declarations: [WolofAudioBeginnerPage]
})
export class WolofAudioBeginnerPageModule {}
