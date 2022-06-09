import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotLoggedComponent } from './not-logged.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PrivacyPoliciesComponent } from './pages/privacy-policies/privacy-policies.component';

const routes: Routes = [
  {
    path: '',
    component: NotLoggedComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: LandingComponent
      },
      {
        path: 'privacy',
        component: PrivacyPoliciesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotLoggedRoutingModule { }
