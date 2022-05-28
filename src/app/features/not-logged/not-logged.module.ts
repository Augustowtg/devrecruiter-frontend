import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NebularImportsModule } from 'src/app/shared/nebular/nebular-imports/imports-Nebular.module';

import { NavbarLandingComponent } from './components/navbar-landing/navbar-landing.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NotLoggedRoutingModule } from './not.routing';
import { NotLoggedComponent } from './not-logged.component';



@NgModule({
  declarations: [
    NotLoggedComponent, 
    LandingPageComponent,
    NavbarLandingComponent
  ],
  imports: [
    CommonModule,
    NotLoggedRoutingModule,
    RouterModule,
    NebularImportsModule
  ],
})
export class NotLoggedModule { }
