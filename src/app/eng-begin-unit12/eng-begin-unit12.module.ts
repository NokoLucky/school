import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit12PageRoutingModule } from './eng-begin-unit12-routing.module';

import { EngBeginUnit12Page } from './eng-begin-unit12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit12PageRoutingModule
  ],
  declarations: [EngBeginUnit12Page]
})
export class EngBeginUnit12PageModule {}
