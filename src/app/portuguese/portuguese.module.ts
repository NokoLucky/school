import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortuguesePageRoutingModule } from './portuguese-routing.module';

import { PortuguesePage } from './portuguese.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortuguesePageRoutingModule
  ],
  declarations: [PortuguesePage]
})
export class PortuguesePageModule {}
