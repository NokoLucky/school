import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BassaReadingPageRoutingModule } from './bassa-reading-routing.module';

import { BassaReadingPage } from './bassa-reading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BassaReadingPageRoutingModule
  ],
  declarations: [BassaReadingPage]
})
export class BassaReadingPageModule {}
