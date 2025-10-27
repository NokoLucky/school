import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreImagesPageRoutingModule } from './fre-images-routing.module';

import { FreImagesPage } from './fre-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreImagesPageRoutingModule
  ],
  declarations: [FreImagesPage]
})
export class FreImagesPageModule {}
