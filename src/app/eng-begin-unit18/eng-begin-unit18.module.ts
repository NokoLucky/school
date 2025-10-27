import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit18PageRoutingModule } from './eng-begin-unit18-routing.module';

import { EngBeginUnit18Page } from './eng-begin-unit18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit18PageRoutingModule
  ],
  declarations: [EngBeginUnit18Page]
})
export class EngBeginUnit18PageModule {}
