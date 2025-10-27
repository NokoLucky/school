import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngImagesPageRoutingModule } from './eng-images-routing.module';

import { EngImagesPage } from './eng-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngImagesPageRoutingModule
  ],
  declarations: [EngImagesPage]
})
export class EngImagesPageModule {}
