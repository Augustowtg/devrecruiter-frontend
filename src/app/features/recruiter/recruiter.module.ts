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
import { RecruiterListResumeComponent } from './pages/recruiter-list-resume/recruiter-list-resume.component';
import { ImaterialModule } from 'src/app/shared/modules/imaterial/imaterial.module';


@NgModule({
  declarations: [
    RecruiterComponent,
    RecruiterHomeComponent,
    RecruiterRegisterJobComponent,
    RecruiterListJobComponent,
    RecruiterListResumeComponent
  ],
  imports: [
    CommonModule,
    RecruiterRoutingModule,
    RouterModule,
    SharedModule,
    ImaterialModule
  ]
})
export class RecruiterModule { }
