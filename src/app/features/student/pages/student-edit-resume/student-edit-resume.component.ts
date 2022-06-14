import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { IResume } from '../../models/resume.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-student-edit-resume',
  templateUrl: './student-edit-resume.component.html',
  styleUrls: ['./student-edit-resume.component.scss']
})
export class StudentEditResumeComponent implements OnInit {

  resume: any;

  constructor(
    private resumeService: ResumeService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.resumeService.getResume().subscribe((response: IResume) => {
      this.resume = response
    })
  }
}
