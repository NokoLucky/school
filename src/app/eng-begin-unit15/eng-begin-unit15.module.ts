import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit15PageRoutingModule } from './eng-begin-unit15-routing.module';

import { EngBeginUnit15Page } from './eng-begin-unit15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit15PageRoutingModule
  ],
  declarations: [EngBeginUnit15Page]
})
export class EngBeginUnit15PageModule {}
