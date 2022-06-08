import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { NotLoggedNavComponent } from './components/not-logged-nav/not-logged-nav.component';
import { NotloggedFooterComponent } from './components/notlogged-footer/notlogged-footer.component';
import { NotLoggedRoutingModule } from './not-logged.routing';
import { LandingComponent } from './pages/landing/landing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PrivacyPoliciesComponent } from './pages/privacy-policies/privacy-policies.component';


@NgModule({
  declarations: [
    LandingComponent,
    PrivacyPoliciesComponent,
    PageNotFoundComponent,
    NotloggedFooterComponent,
    NotLoggedNavComponent
  ],
  imports: [
    CommonModule,
    NotLoggedRoutingModule,
    RouterModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class NotLoggedModule { }
