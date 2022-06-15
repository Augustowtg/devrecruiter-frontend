import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { IResume } from '../../models/resume.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-student-register-resume',
  templateUrl: './student-register-resume.component.html',
  styleUrls: ['./student-register-resume.component.scss']
})
export class StudentRegisterResumeComponent {

  submitted = false;

  resumeForm = this.formBuilder.group({
    name: [null],
    description: [null],
    SoftSkill: [null],
    HardSkill: [null],
    contact: [null],
    escolaridade: [null]
  })

  constructor(
    private formBuilder: FormBuilder,
    private resumeService: ResumeService
  ) { }

  public onSubmit() {

    const resume: IResume = {
      name: this.resumeForm.get('name')?.value,
      description: this.resumeForm.get('description')?.value,
      SoftSkill: this.resumeForm.get('SoftSkill')?.value,
      HardSkill: this.resumeForm.get('HardSkill')?.value,
      contact: this.resumeForm.get('contact')?.value,
      escolaridade: this.resumeForm.get('escolaridade')?.value,
    };

    this.resumeService.RegisterResume(resume).subscribe(
      (response: any) => {
        let resume = response.message
        localStorage.setItem('resume_id_student', resume.id)
      })
  }
}
