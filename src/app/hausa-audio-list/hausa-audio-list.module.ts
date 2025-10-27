import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HausaAudioListPageRoutingModule } from './hausa-audio-list-routing.module';

import { HausaAudioListPage } from './hausa-audio-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HausaAudioListPageRoutingModule
  ],
  declarations: [HausaAudioListPage]
})
export class HausaAudioListPageModule {}
