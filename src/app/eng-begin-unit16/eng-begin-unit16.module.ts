import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit16PageRoutingModule } from './eng-begin-unit16-routing.module';

import { EngBeginUnit16Page } from './eng-begin-unit16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit16PageRoutingModule
  ],
  declarations: [EngBeginUnit16Page]
})
export class EngBeginUnit16PageModule {}
