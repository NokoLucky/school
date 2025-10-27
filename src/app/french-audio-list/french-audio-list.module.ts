import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrenchAudioListPageRoutingModule } from './french-audio-list-routing.module';

import { FrenchAudioListPage } from './french-audio-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrenchAudioListPageRoutingModule
  ],
  declarations: [FrenchAudioListPage]
})
export class FrenchAudioListPageModule {}
