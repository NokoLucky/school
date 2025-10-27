import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngDel2PageRoutingModule } from './eng-del2-routing.module';

import { EngDel2Page } from './eng-del2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngDel2PageRoutingModule
  ],
  declarations: [EngDel2Page]
})
export class EngDel2PageModule {}
