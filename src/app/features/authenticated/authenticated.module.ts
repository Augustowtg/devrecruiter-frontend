import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedComponent } from './authenticated.component';
import { AuthenticatedRoutingModule } from './authenticated.routing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AuthenticatedComponent
  ],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule,
    MatSidenavModule,
    SharedModule
  ]
})
export class AuthenticatedModule { }
