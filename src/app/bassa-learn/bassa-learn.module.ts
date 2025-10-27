import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BassaLearnPageRoutingModule } from './bassa-learn-routing.module';

import { BassaLearnPage } from './bassa-learn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BassaLearnPageRoutingModule
  ],
  declarations: [BassaLearnPage]
})
export class BassaLearnPageModule {}
