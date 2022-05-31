import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { StudentEditVitaeComponent } from './pages/student-edit-vitae/student-edit-vitae.component';
import { StudentHomeComponent } from './pages/student-home/student-home.component';
import {
  StudentRegisterCurriculumComponent,
} from './pages/student-register-curriculum/student-register-curriculum.component';
import { StudentRegisterVitaeComponent } from './pages/student-register-vitae/student-register-vitae.component';
import { StudentVitaeComponent } from './pages/student-vitae/student-vitae.component';
import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student.routing';

@NgModule({
  declarations: [
    StudentComponent,
    StudentHomeComponent,
    StudentRegisterCurriculumComponent,
    StudentEditVitaeComponent,
    StudentVitaeComponent,
    StudentRegisterVitaeComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    RouterModule,
    SharedModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class StudentModule { }
