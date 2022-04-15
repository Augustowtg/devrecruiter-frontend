import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotLoggedComponent } from './not-logged.component';

const routes: Routes = [
  {
    path: '',
    component: NotLoggedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotLoggedRoutingModule { }
