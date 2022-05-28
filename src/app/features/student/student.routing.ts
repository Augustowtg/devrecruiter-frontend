import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCurriculumComponent } from './pages/student-curriculum/student-curriculum.component';
import { StudentHomeComponent } from './pages/student-home/student-home.component';

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
        path: 'curriculo',
        component: StudentCurriculumComponent
      },
      {
        path: 'registro-curriculo',
        component: StudentCurriculumComponent
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class StudentRoutingModule { }
