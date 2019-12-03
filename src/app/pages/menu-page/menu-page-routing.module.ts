import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPagePage } from './menu-page.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPagePageRoutingModule {}
