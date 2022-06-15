import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruiterHomeComponent } from './pages/recruiter-home/recruiter-home.component';
import { RecruiterListResumeComponent } from './pages/recruiter-list-resume/recruiter-list-resume.component';

import { RecruiterComponent } from './recruiter.component';

const routes: Routes = [
  {
    path: '',
    component: RecruiterComponent,
    children: [
      {
        path: '',
        component: RecruiterHomeComponent
      },
      {
        path: 'curriculums',
        component: RecruiterListResumeComponent
      },
      {
        path: 'vacancies',
        component: RecruiterHomeComponent
      },
      {
        path: 'vacancies/create',
        component: RecruiterHomeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
