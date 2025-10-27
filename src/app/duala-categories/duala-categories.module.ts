import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DualaCategoriesPageRoutingModule } from './duala-categories-routing.module';

import { DualaCategoriesPage } from './duala-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DualaCategoriesPageRoutingModule
  ],
  declarations: [DualaCategoriesPage]
})
export class DualaCategoriesPageModule {}
