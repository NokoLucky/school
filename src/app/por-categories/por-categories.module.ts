import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorCategoriesPageRoutingModule } from './por-categories-routing.module';

import { PorCategoriesPage } from './por-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorCategoriesPageRoutingModule
  ],
  declarations: [PorCategoriesPage]
})
export class PorCategoriesPageModule {}
