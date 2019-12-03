import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPagePageRoutingModule } from './menu-page-routing.module';

import { MenuPagePage } from './menu-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPagePageRoutingModule
  ],
  declarations: [MenuPagePage]
})
export class MenuPagePageModule {}
