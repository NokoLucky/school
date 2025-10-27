import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit28PageRoutingModule } from './eng-begin-unit28-routing.module';

import { EngBeginUnit28Page } from './eng-begin-unit28.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit28PageRoutingModule
  ],
  declarations: [EngBeginUnit28Page]
})
export class EngBeginUnit28PageModule {}
