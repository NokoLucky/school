import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorLearnPageRoutingModule } from './por-learn-routing.module';

import { PorLearnPage } from './por-learn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorLearnPageRoutingModule
  ],
  declarations: [PorLearnPage]
})
export class PorLearnPageModule {}
