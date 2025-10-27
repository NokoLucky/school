import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreCategoriesPageRoutingModule } from './fre-categories-routing.module';

import { FreCategoriesPage } from './fre-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreCategoriesPageRoutingModule
  ],
  declarations: [FreCategoriesPage]
})
export class FreCategoriesPageModule {}
