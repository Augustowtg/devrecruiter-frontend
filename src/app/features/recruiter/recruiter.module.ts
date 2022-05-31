import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { RecruiterHomeComponent } from './pages/recruiter-home/recruiter-home.component';
import { RecruiterComponent } from './recruiter.component';
import { RecruiterRoutingModule } from './recruiter.routing';
import { RecruiterRegisterJobComponent } from './pages/recruiter-register-job/recruiter-register-job.component';
import { RecruiterListJobComponent } from './pages/recruiter-list-job/recruiter-list-job.component';
import { RecruiterListVitaeComponent } from './pages/recruiter-list-vitae/recruiter-list-vitae.component';


@NgModule({
  declarations: [
    RecruiterComponent,
    RecruiterHomeComponent,
    RecruiterRegisterJobComponent,
    RecruiterListJobComponent,
    RecruiterListVitaeComponent
  ],
  imports: [
    CommonModule,
    RecruiterRoutingModule,
    RouterModule,
    SharedModule,
  ]
})
export class RecruiterModule { }
