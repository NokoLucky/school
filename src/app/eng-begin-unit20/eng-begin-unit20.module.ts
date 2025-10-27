import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit20PageRoutingModule } from './eng-begin-unit20-routing.module';

import { EngBeginUnit20Page } from './eng-begin-unit20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit20PageRoutingModule
  ],
  declarations: [EngBeginUnit20Page]
})
export class EngBeginUnit20PageModule {}
