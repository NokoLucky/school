import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngCategoriesPageRoutingModule } from './eng-categories-routing.module';

import { EngCategoriesPage } from './eng-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngCategoriesPageRoutingModule
  ],
  declarations: [EngCategoriesPage]
})
export class EngCategoriesPageModule {}
