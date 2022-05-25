import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbActionsModule, NbContextMenuModule, NbIconModule } from '@nebular/theme';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { NotLoggedComponent } from './not-logged.component';

const routes: Routes = [
  {
    path: '',
    component: NotLoggedComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes), 
    NbContextMenuModule, 
    NbIconModule, 
    NbActionsModule
  ],
  exports: [RouterModule],
})
export class NotLoggedRoutingModule { }
