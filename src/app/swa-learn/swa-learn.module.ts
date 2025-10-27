import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwaLearnPageRoutingModule } from './swa-learn-routing.module';

import { SwaLearnPage } from './swa-learn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwaLearnPageRoutingModule
  ],
  declarations: [SwaLearnPage]
})
export class SwaLearnPageModule {}
