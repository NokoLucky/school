import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorImagesPageRoutingModule } from './por-images-routing.module';

import { PorImagesPage } from './por-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorImagesPageRoutingModule
  ],
  declarations: [PorImagesPage]
})
export class PorImagesPageModule {}
