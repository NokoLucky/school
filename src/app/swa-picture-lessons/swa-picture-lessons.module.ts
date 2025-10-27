import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwaPictureLessonsPageRoutingModule } from './swa-picture-lessons-routing.module';

import { SwaPictureLessonsPage } from './swa-picture-lessons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwaPictureLessonsPageRoutingModule
  ],
  declarations: [SwaPictureLessonsPage]
})
export class SwaPictureLessonsPageModule {}
