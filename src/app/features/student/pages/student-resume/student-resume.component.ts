import { Component, OnInit } from '@angular/core';

import { IResume } from '../../models/resume.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-student-resume',
  templateUrl: './student-resume.component.html',
  styleUrls: ['./student-resume.component.scss']
})
export class StudentResumeComponent implements OnInit {

  resume: IResume = {
    contact: '',
    description: '',
    escolaridade: '',
    HardSkill: '',
    name: '',
    SoftSkill: ''
  }
  resumeId = String(localStorage.getItem('resume_id_student'))

  constructor(
    private resumeService: ResumeService,
  ) { }

  ngOnInit(): void {

    this.resumeService.getResume(this.resumeId).subscribe((response: any) => {
      this.resume = response.message
    })
  }

}
