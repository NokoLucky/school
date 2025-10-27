import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwaAudioAdvancedPageRoutingModule } from './swa-audio-advanced-routing.module';

import { SwaAudioAdvancedPage } from './swa-audio-advanced.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwaAudioAdvancedPageRoutingModule
  ],
  declarations: [SwaAudioAdvancedPage]
})
export class SwaAudioAdvancedPageModule {}
