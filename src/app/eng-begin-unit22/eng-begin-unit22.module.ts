import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit22PageRoutingModule } from './eng-begin-unit22-routing.module';

import { EngBeginUnit22Page } from './eng-begin-unit22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit22PageRoutingModule
  ],
  declarations: [EngBeginUnit22Page]
})
export class EngBeginUnit22PageModule {}
