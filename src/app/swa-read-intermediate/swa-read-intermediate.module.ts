import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwaReadIntermediatePageRoutingModule } from './swa-read-intermediate-routing.module';

import { SwaReadIntermediatePage } from './swa-read-intermediate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwaReadIntermediatePageRoutingModule
  ],
  declarations: [SwaReadIntermediatePage]
})
export class SwaReadIntermediatePageModule {}
