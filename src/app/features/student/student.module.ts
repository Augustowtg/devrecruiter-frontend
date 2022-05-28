import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NebularImportsModule } from 'src/app/shared/nebular/nebular-imports/imports-Nebular.module';

import { FeaturesModule } from '../features.module';
import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student.routing';
import { StudentHomeComponent } from './pages/student-home/student-home.component';
import { StudentRegisterCurriculumComponent } from './pages/student-register-curriculum/student-register-curriculum.component';
import { StudentCurriculumComponent } from './pages/student-curriculum/student-curriculum.component';

@NgModule({
  declarations: [
    StudentComponent,
    StudentHomeComponent,
    StudentRegisterCurriculumComponent,
    StudentCurriculumComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FeaturesModule,
    NebularImportsModule
  ]
})
export class StudentModule { }
