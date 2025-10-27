import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreLearnPageRoutingModule } from './fre-learn-routing.module';

import { FreLearnPage } from './fre-learn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreLearnPageRoutingModule
  ],
  declarations: [FreLearnPage]
})
export class FreLearnPageModule {}
