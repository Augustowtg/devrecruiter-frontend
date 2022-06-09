import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedComponent } from './authenticated.component';
import { AuthenticatedRoutingModule } from './authenticated.routing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImaterialModule } from 'src/app/shared/modules/imaterial/imaterial.module';


@NgModule({
  declarations: [
    AuthenticatedComponent
  ],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule,
    SharedModule,
    ImaterialModule,
  ]
})
export class AuthenticatedModule { }
