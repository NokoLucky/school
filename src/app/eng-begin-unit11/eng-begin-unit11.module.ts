import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit11PageRoutingModule } from './eng-begin-unit11-routing.module';

import { EngBeginUnit11Page } from './eng-begin-unit11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit11PageRoutingModule
  ],
  declarations: [EngBeginUnit11Page]
})
export class EngBeginUnit11PageModule {}
