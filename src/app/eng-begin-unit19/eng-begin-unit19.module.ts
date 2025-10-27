import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit19PageRoutingModule } from './eng-begin-unit19-routing.module';

import { EngBeginUnit19Page } from './eng-begin-unit19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit19PageRoutingModule
  ],
  declarations: [EngBeginUnit19Page]
})
export class EngBeginUnit19PageModule {}
