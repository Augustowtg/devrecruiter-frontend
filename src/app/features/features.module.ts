import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features.routing';
import { NotLoggedComponent } from './not-logged/not-logged.component';



@NgModule({
  declarations: [
    FeaturesComponent,
    NotLoggedComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    RouterModule
  ]
})
export class FeaturesModule { }
