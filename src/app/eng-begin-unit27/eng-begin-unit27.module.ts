import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit27PageRoutingModule } from './eng-begin-unit27-routing.module';

import { EngBeginUnit27Page } from './eng-begin-unit27.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit27PageRoutingModule
  ],
  declarations: [EngBeginUnit27Page]
})
export class EngBeginUnit27PageModule {}
