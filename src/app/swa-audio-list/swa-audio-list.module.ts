import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwaAudioListPageRoutingModule } from './swa-audio-list-routing.module';

import { SwaAudioListPage } from './swa-audio-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwaAudioListPageRoutingModule
  ],
  declarations: [SwaAudioListPage]
})
export class SwaAudioListPageModule {}
