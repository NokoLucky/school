import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwaCategoriesPageRoutingModule } from './swa-categories-routing.module';

import { SwaCategoriesPage } from './swa-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwaCategoriesPageRoutingModule
  ],
  declarations: [SwaCategoriesPage]
})
export class SwaCategoriesPageModule {}
