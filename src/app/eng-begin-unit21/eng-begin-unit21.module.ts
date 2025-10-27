import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit21PageRoutingModule } from './eng-begin-unit21-routing.module';

import { EngBeginUnit21Page } from './eng-begin-unit21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit21PageRoutingModule
  ],
  declarations: [EngBeginUnit21Page]
})
export class EngBeginUnit21PageModule {}
