import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit13PageRoutingModule } from './eng-begin-unit13-routing.module';

import { EngBeginUnit13Page } from './eng-begin-unit13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit13PageRoutingModule
  ],
  declarations: [EngBeginUnit13Page]
})
export class EngBeginUnit13PageModule {}
