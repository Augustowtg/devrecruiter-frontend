import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentEditResumeComponent } from './pages/student-edit-resume/student-edit-resume.component';
import { StudentHomeComponent } from './pages/student-home/student-home.component';
import { StudentRegisterResumeComponent } from './pages/student-register-resume/student-register-resume.component';
import { StudentResumeComponent } from './pages/student-resume/student-resume.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path: '',
        component: StudentHomeComponent
      },
      {
        path: 'curriculum-register',
        component: StudentRegisterResumeComponent
      },
      {
        path: 'curriculum',
        component: StudentResumeComponent
      },
      {
        path: 'curriculum-edit',
        component: StudentEditResumeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
