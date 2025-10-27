import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngDel3PageRoutingModule } from './eng-del3-routing.module';

import { EngDel3Page } from './eng-del3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngDel3PageRoutingModule
  ],
  declarations: [EngDel3Page]
})
export class EngDel3PageModule {}
