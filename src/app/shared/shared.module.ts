import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbCardModule, NbLayoutModule } from '@nebular/theme';

import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [DialogComponent,],
  imports: [CommonModule, NbLayoutModule, NbCardModule],
  exports: [],
})
export class SharedModule {}
