import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule,
    RouterModule
  ]
})
export class CoreModule { }
