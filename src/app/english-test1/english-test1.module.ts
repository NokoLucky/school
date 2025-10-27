import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnglishTest1PageRoutingModule } from './english-test1-routing.module';

import { EnglishTest1Page } from './english-test1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnglishTest1PageRoutingModule
  ],
  declarations: [EnglishTest1Page]
})
export class EnglishTest1PageModule {}
