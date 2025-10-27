import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BassaAudioPageRoutingModule } from './bassa-audio-routing.module';

import { BassaAudioPage } from './bassa-audio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BassaAudioPageRoutingModule
  ],
  declarations: [BassaAudioPage]
})
export class BassaAudioPageModule {}
