import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnglishTestsPageRoutingModule } from './english-tests-routing.module';

import { EnglishTestsPage } from './english-tests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnglishTestsPageRoutingModule
  ],
  declarations: [EnglishTestsPage]
})
export class EnglishTestsPageModule {}
