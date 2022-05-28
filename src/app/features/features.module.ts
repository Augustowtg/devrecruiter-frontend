import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeaturesRoutingModule } from './features.routing';
import { FeaturesComponent } from './features.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    FeaturesComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class FeaturesModule { }
