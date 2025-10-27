import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit29PageRoutingModule } from './eng-begin-unit29-routing.module';

import { EngBeginUnit29Page } from './eng-begin-unit29.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit29PageRoutingModule
  ],
  declarations: [EngBeginUnit29Page]
})
export class EngBeginUnit29PageModule {}
