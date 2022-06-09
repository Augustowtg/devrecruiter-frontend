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

import { FooterStudentComponent } from './layouts/footer-student/footer-student.component';
import { HeaderStudentComponent } from './layouts/header-student/header-student.component';
import { NavbarStudentComponent } from './layouts/navbar-student/navbar-student.component';
import { StudentEditVitaeComponent } from './pages/student-edit-vitae/student-edit-vitae.component';
import { StudentHomeComponent } from './pages/student-home/student-home.component';
import { StudentRegisterVitaeComponent } from './pages/student-register-vitae/student-register-vitae.component';
import { StudentVitaeComponent } from './pages/student-vitae/student-vitae.component';
import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student.routing';

@NgModule({
  declarations: [
    StudentComponent,
    StudentHomeComponent,
    StudentEditVitaeComponent,
    StudentVitaeComponent,
    StudentRegisterVitaeComponent,
    NavbarStudentComponent,
    FooterStudentComponent,
    HeaderStudentComponent
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
