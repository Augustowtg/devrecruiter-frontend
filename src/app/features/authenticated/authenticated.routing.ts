import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticatedComponent } from './authenticated.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticatedComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'student',
        loadChildren: () =>
          import('../student/student.module').then((m) => m.StudentModule),
      },
      {
        path: 'recruiter',
        loadChildren: () =>
          import('../recruiter/recruiter.module').then(
            (m) => m.RecruiterModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticatedRoutingModule {}
