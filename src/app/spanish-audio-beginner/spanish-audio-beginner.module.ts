import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpanishAudioBeginnerPageRoutingModule } from './spanish-audio-beginner-routing.module';

import { SpanishAudioBeginnerPage } from './spanish-audio-beginner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpanishAudioBeginnerPageRoutingModule
  ],
  declarations: [SpanishAudioBeginnerPage]
})
export class SpanishAudioBeginnerPageModule {}
