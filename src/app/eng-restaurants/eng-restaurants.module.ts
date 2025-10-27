import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngRestaurantsPageRoutingModule } from './eng-restaurants-routing.module';

import { EngRestaurantsPage } from './eng-restaurants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngRestaurantsPageRoutingModule
  ],
  declarations: [EngRestaurantsPage]
})
export class EngRestaurantsPageModule {}
