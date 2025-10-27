import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortugueseAudioListPageRoutingModule } from './portuguese-audio-list-routing.module';

import { PortugueseAudioListPage } from './portuguese-audio-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortugueseAudioListPageRoutingModule
  ],
  declarations: [PortugueseAudioListPage]
})
export class PortugueseAudioListPageModule {}
