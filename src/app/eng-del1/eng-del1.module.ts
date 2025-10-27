import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngDel1PageRoutingModule } from './eng-del1-routing.module';

import { EngDel1Page } from './eng-del1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngDel1PageRoutingModule
  ],
  declarations: [EngDel1Page]
})
export class EngDel1PageModule {}
