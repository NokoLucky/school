import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit30PageRoutingModule } from './eng-begin-unit30-routing.module';

import { EngBeginUnit30Page } from './eng-begin-unit30.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit30PageRoutingModule
  ],
  declarations: [EngBeginUnit30Page]
})
export class EngBeginUnit30PageModule {}
