import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit26PageRoutingModule } from './eng-begin-unit26-routing.module';

import { EngBeginUnit26Page } from './eng-begin-unit26.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit26PageRoutingModule
  ],
  declarations: [EngBeginUnit26Page]
})
export class EngBeginUnit26PageModule {}
