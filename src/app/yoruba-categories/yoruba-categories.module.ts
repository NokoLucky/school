import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YorubaCategoriesPageRoutingModule } from './yoruba-categories-routing.module';

import { YorubaCategoriesPage } from './yoruba-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YorubaCategoriesPageRoutingModule
  ],
  declarations: [YorubaCategoriesPage]
})
export class YorubaCategoriesPageModule {}
