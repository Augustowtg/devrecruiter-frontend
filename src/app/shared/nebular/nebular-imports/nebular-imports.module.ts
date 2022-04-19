import { NgModule } from '@angular/core';
import { NbLayoutModule } from '@nebular/theme';

const mNebular = [
  NbLayoutModule
]

@NgModule({
  exports: [mNebular],
  imports: [mNebular]
})
export class NebularImportsModule { }
