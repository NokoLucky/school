import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpanishCategoriesPageRoutingModule } from './spanish-categories-routing.module';

import { SpanishCategoriesPage } from './spanish-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpanishCategoriesPageRoutingModule
  ],
  declarations: [SpanishCategoriesPage]
})
export class SpanishCategoriesPageModule {}
