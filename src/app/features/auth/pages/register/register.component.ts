import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterService } from '../../services/register/register.service';
import { IUserRegister } from './../../models/user-register/user-register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  roles: any[] = [
    {
      viewValue: 'Recrutador',
      value: true
    },
    {
      viewValue: 'Aluno',
      value: false
    },
  ]
  public submitted = false;

  public registerUserForm = this.formbuilder.group(
    {
      name: [null, [Validators.required]],
      email: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [null, [Validators.required]],
      password2: [null, [Validators.required]],
      isAdmin: [null]
    },
    {
      validator: this.validatePassword('password', 'password2'),
    }
  );

  constructor(
    private formbuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {}

  get registerFormControls(): any {
    return this.registerUserForm.controls;
  }

  validatePassword(password: string, password2: string): any {
    return (group: FormGroup) => {
      const passInput = group.controls[password];
      const passConfirmation = group.controls[password2];

      if (passInput.value !== passConfirmation.value) {
        return passConfirmation.setErrors({ notEquivalent: true });
      } else {
        return passConfirmation.setErrors(null);
      }
    };
  }

  registerUser(): void {
    this.submitted = true;

    if (this.registerUserForm.invalid) {
      return;
    }

    const typedRegisterUserForm: IUserRegister = {
      name: this.registerUserForm.get('name')?.value,
      email: this.registerUserForm.get('email')?.value,
      password: this.registerUserForm.get('password')?.value,
      isAdmin: this.registerUserForm.get('isAdmin')?.value,
    };
    console.log(typedRegisterUserForm.isAdmin )
    let userRegisterId: any = 0;

    this.registerService.registerUser(typedRegisterUserForm).subscribe(
      (responseRegisterUser: any) => {
        userRegisterId = responseRegisterUser.id;

        this.router.navigate(['/auth/login']);
      },
      (err) => {
        console.log('Register user error: ' + err);
      }
    );
  }
}
