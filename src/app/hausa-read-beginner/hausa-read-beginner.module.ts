import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HausaReadBeginnerPageRoutingModule } from './hausa-read-beginner-routing.module';

import { HausaReadBeginnerPage } from './hausa-read-beginner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HausaReadBeginnerPageRoutingModule
  ],
  declarations: [HausaReadBeginnerPage]
})
export class HausaReadBeginnerPageModule {}
