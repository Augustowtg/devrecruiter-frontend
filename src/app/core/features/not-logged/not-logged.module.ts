import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NbActionsModule, NbButtonModule, NbContextMenuModule, NbIconModule, NbLayoutModule } from '@nebular/theme';
import { NebularImportsModule } from 'src/app/shared/nebular/nebular-imports/nebular-imports.module';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotLoggedRoutingModule } from './not-logged-routing.module';
import { NotLoggedComponent } from './not-logged.component';



@NgModule({
  declarations: [NotLoggedComponent, LandingPageComponent],
  imports: [
    CommonModule,
    NotLoggedRoutingModule,
    RouterModule,
    NbLayoutModule,
    NbIconModule,
    NbButtonModule,
    NbContextMenuModule,
    NbActionsModule
  ]
})
export class NotLoggedModule { }
