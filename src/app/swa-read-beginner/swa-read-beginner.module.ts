import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwaReadBeginnerPageRoutingModule } from './swa-read-beginner-routing.module';

import { SwaReadBeginnerPage } from './swa-read-beginner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwaReadBeginnerPageRoutingModule
  ],
  declarations: [SwaReadBeginnerPage]
})
export class SwaReadBeginnerPageModule {}
