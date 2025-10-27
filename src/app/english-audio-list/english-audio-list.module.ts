import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnglishAudioListPageRoutingModule } from './english-audio-list-routing.module';

import { EnglishAudioListPage } from './english-audio-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnglishAudioListPageRoutingModule
  ],
  declarations: [EnglishAudioListPage]
})
export class EnglishAudioListPageModule {}
