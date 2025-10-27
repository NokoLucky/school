import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DualaAudioBeginnerPageRoutingModule } from './duala-audio-beginner-routing.module';

import { DualaAudioBeginnerPage } from './duala-audio-beginner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DualaAudioBeginnerPageRoutingModule
  ],
  declarations: [DualaAudioBeginnerPage]
})
export class DualaAudioBeginnerPageModule {}
