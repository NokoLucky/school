import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BassaCategoriesPageRoutingModule } from './bassa-categories-routing.module';

import { BassaCategoriesPage } from './bassa-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BassaCategoriesPageRoutingModule
  ],
  declarations: [BassaCategoriesPage]
})
export class BassaCategoriesPageModule {}
