import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit23PageRoutingModule } from './eng-begin-unit23-routing.module';

import { EngBeginUnit23Page } from './eng-begin-unit23.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit23PageRoutingModule
  ],
  declarations: [EngBeginUnit23Page]
})
export class EngBeginUnit23PageModule {}
