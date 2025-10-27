import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngDel4PageRoutingModule } from './eng-del4-routing.module';

import { EngDel4Page } from './eng-del4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngDel4PageRoutingModule
  ],
  declarations: [EngDel4Page]
})
export class EngDel4PageModule {}
