import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { StudentEditResumeComponent } from './pages/student-edit-resume/student-edit-resume.component';
import { StudentHomeComponent } from './pages/student-home/student-home.component';
import { StudentRegisterResumeComponent } from './pages/student-register-resume/student-register-resume.component';
import { StudentResumeComponent } from './pages/student-resume/student-resume.component';
import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student.routing';

@NgModule({
  declarations: [
    StudentComponent,
    StudentHomeComponent,
    StudentEditResumeComponent,
    StudentResumeComponent,
    StudentRegisterResumeComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    RouterModule,
    SharedModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule
  ]
})
export class StudentModule { }
