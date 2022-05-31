import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentEditVitaeComponent } from './pages/student-edit-vitae/student-edit-vitae.component';
import { StudentHomeComponent } from './pages/student-home/student-home.component';
import { StudentRegisterVitaeComponent } from './pages/student-register-vitae/student-register-vitae.component';
import { StudentVitaeComponent } from './pages/student-vitae/student-vitae.component';
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
        component: StudentRegisterVitaeComponent
      },
      {
        path: 'curriculum',
        component: StudentVitaeComponent
      },
      {
        path: 'curriculum-edit',
        component: StudentEditVitaeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
