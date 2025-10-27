import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit14PageRoutingModule } from './eng-begin-unit14-routing.module';

import { EngBeginUnit14Page } from './eng-begin-unit14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit14PageRoutingModule
  ],
  declarations: [EngBeginUnit14Page]
})
export class EngBeginUnit14PageModule {}
