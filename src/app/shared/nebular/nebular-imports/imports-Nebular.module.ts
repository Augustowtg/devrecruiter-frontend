import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbContextMenuModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule,
} from '@nebular/theme';

const mNebular = [
  NbLayoutModule,
  NbSidebarModule,
  NbIconModule,
  NbButtonModule,
  NbContextMenuModule,
  NbActionsModule
]

@NgModule({
  exports: [mNebular],
  imports: [mNebular]
})
export class NebularImportsModule { }
