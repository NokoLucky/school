import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HausaLearnPageRoutingModule } from './hausa-learn-routing.module';

import { HausaLearnPage } from './hausa-learn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HausaLearnPageRoutingModule
  ],
  declarations: [HausaLearnPage]
})
export class HausaLearnPageModule {}
