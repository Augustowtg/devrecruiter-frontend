import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarInternalComponent } from './components/navbar-internal/navbar-internal.component';
import { FooterInternalComponent } from './components/footer-internal/footer-internal.component';
import { ImaterialModule } from './modules/imaterial/imaterial.module';
import { SidebarInternalComponent } from './components/sidebar-internal/sidebar-internal.component';
import { RouterModule } from '@angular/router';


const sharedExportDeclarations = [
  NavbarInternalComponent,
  FooterInternalComponent,
  SidebarInternalComponent
]

@NgModule({
  declarations: [
    sharedExportDeclarations
  ],
  imports: [
    CommonModule,
    ImaterialModule,
    RouterModule
  ],
  exports: [
    sharedExportDeclarations
  ]
})

export class SharedModule { }
