import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarInternalComponent } from './components/navbar-internal/navbar-internal.component';
import { FooterInternalComponent } from './components/footer-internal/footer-internal.component';
import { ImaterialModule } from './modules/imaterial/imaterial.module';


const sharedExportDeclarations = [
  NavbarInternalComponent,
  FooterInternalComponent
]

@NgModule({
  declarations: [
    sharedExportDeclarations,
  ],
  imports: [
    CommonModule,
    ImaterialModule
  ],
  exports: [
    sharedExportDeclarations
  ]
})

export class SharedModule { }
