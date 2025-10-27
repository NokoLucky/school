import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwaReadAdvancedPageRoutingModule } from './swa-read-advanced-routing.module';

import { SwaReadAdvancedPage } from './swa-read-advanced.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwaReadAdvancedPageRoutingModule
  ],
  declarations: [SwaReadAdvancedPage]
})
export class SwaReadAdvancedPageModule {}
