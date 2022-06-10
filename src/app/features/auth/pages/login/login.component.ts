import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

import { IUserLogin } from '../../models/user-login/user-login.model';
import { LoginService } from '../../services/login/login.service';
import { IUserResponseLogin } from './../../models/user-login/user-response-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public submitted = false;

  public loginUserForm = this.formbuilder.group({
    email: [
      null,
      [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    password: [null, [Validators.required]],
  });

  constructor(
    private formbuilder: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService
  ) {}

  get loginFormControls(): any {
    return this.loginUserForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    let userForm: IUserLogin = {
      email: this.loginUserForm.get('email')?.value,
      password: this.loginUserForm.get('password')?.value,
    };

    if (this.loginUserForm.invalid) {
      return;
    }

    this.loginService.loginUser(userForm).subscribe(
      (response: IUserResponseLogin) => {
        this.authService.userSession(response);
      },
      (err) => {
        console.log('Error login session: ' + err);
      }
    );
  }
}
