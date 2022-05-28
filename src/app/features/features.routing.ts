import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesComponent } from './features.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./not-logged/not-logged.module').then((m) => m.NotLoggedModule),
      },
      
      {
        path: 'estudante',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule { }
