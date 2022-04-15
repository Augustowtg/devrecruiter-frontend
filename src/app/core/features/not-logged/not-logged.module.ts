import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotLoggedRoutingModule } from './not-logged-routing.module';
import { NotLoggedComponent } from './not-logged.component';



@NgModule({
  declarations: [NotLoggedComponent],
  imports: [
    CommonModule,
    NotLoggedRoutingModule,
    RouterModule
  ]
})
export class NotLoggedModule { }
