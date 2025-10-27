import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit25PageRoutingModule } from './eng-begin-unit25-routing.module';

import { EngBeginUnit25Page } from './eng-begin-unit25.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit25PageRoutingModule
  ],
  declarations: [EngBeginUnit25Page]
})
export class EngBeginUnit25PageModule {}
