import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngDel5PageRoutingModule } from './eng-del5-routing.module';

import { EngDel5Page } from './eng-del5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngDel5PageRoutingModule
  ],
  declarations: [EngDel5Page]
})
export class EngDel5PageModule {}
