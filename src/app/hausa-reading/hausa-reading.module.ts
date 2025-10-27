import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HausaReadingPageRoutingModule } from './hausa-reading-routing.module';

import { HausaReadingPage } from './hausa-reading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HausaReadingPageRoutingModule
  ],
  declarations: [HausaReadingPage]
})
export class HausaReadingPageModule {}
