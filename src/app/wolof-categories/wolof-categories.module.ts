import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WolofCategoriesPageRoutingModule } from './wolof-categories-routing.module';

import { WolofCategoriesPage } from './wolof-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WolofCategoriesPageRoutingModule
  ],
  declarations: [WolofCategoriesPage]
})
export class WolofCategoriesPageModule {}
