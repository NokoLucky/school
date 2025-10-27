import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngBeginUnit24PageRoutingModule } from './eng-begin-unit24-routing.module';

import { EngBeginUnit24Page } from './eng-begin-unit24.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngBeginUnit24PageRoutingModule
  ],
  declarations: [EngBeginUnit24Page]
})
export class EngBeginUnit24PageModule {}
