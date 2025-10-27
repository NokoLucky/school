import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit17PageRoutingModule } from './eng-begin-unit17-routing.module';

import { EngBeginUnit17Page } from './eng-begin-unit17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit17PageRoutingModule
  ],
  declarations: [EngBeginUnit17Page]
})
export class EngBeginUnit17PageModule {}
