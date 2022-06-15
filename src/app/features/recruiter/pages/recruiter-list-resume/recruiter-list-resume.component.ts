import { Component, OnInit } from '@angular/core';
import { IResume } from 'src/app/features/student/models/resume.model';
import { ApplicantService } from '../../services/applicant.service';

@Component({
  selector: 'app-recruiter-list-resume',
  templateUrl: './recruiter-list-resume.component.html',
  styleUrls: ['./recruiter-list-resume.component.scss']
})
export class RecruiterListResumeComponent implements OnInit {

  resumeList: IResume[] = []

  constructor(
    private applicantService: ApplicantService
  ) { }

  ngOnInit(): void {
    this.applicantService.getApplicant().subscribe(
      (response: any) => {
        this.resumeList = response.message
      }
    )
  }

}
