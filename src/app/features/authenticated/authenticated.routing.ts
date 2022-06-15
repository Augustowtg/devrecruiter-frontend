import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth/auth.guard';
import { RecruiterGuard } from 'src/app/core/guards/recruiter/recruiter.guard';
import { StudentGuard } from 'src/app/core/guards/student/student.guard';

import { AuthenticatedComponent } from './authenticated.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    component: AuthenticatedComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'Student',
        redirectTo: 'student'
      },
      {
        path: 'Recruiter',
        redirectTo: 'recruiter'
      },
      {
        path: 'student',
        canActivate: [StudentGuard],
        loadChildren: () =>
          import('../student/student.module').then((m) => m.StudentModule),
      },
      {
        path: 'recruiter',
        canActivate: [RecruiterGuard],
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
