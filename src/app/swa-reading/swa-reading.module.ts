import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwaReadingPageRoutingModule } from './swa-reading-routing.module';

import { SwaReadingPage } from './swa-reading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwaReadingPageRoutingModule
  ],
  declarations: [SwaReadingPage]
})
export class SwaReadingPageModule {}
