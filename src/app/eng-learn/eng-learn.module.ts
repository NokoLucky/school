import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngLearnPageRoutingModule } from './eng-learn-routing.module';

import { EngLearnPage } from './eng-learn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngLearnPageRoutingModule
  ],
  declarations: [EngLearnPage]
})
export class EngLearnPageModule {}
