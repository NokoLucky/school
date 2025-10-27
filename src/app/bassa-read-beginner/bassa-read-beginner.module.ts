import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BassaReadBeginnerPageRoutingModule } from './bassa-read-beginner-routing.module';

import { BassaReadBeginnerPage } from './bassa-read-beginner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BassaReadBeginnerPageRoutingModule
  ],
  declarations: [BassaReadBeginnerPage]
})
export class BassaReadBeginnerPageModule {}
