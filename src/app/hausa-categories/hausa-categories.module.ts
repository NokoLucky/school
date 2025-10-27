import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HausaCategoriesPageRoutingModule } from './hausa-categories-routing.module';

import { HausaCategoriesPage } from './hausa-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HausaCategoriesPageRoutingModule
  ],
  declarations: [HausaCategoriesPage]
})
export class HausaCategoriesPageModule {}
