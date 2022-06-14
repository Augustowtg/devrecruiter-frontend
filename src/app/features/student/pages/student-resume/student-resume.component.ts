import { Component, OnInit } from '@angular/core';

import { IResume } from '../../models/resume.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-student-resume',
  templateUrl: './student-resume.component.html',
  styleUrls: ['./student-resume.component.scss']
})
export class StudentResumeComponent implements OnInit {

  resume: any
  constructor(
    private resumeService: ResumeService,
  ) { }

  ngOnInit(): void {
    this.resumeService.getResume().subscribe((response: IResume) => {
      this.resume = response
    })
  }

}
