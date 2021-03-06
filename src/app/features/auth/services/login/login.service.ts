import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AuthService } from './../../../../core/services/auth/auth.service';
import { IUserLogin } from './../../models/user-login/user-login.model';
import { IUserResponseLogin } from './../../models/user-login/user-response-login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = `${environment.API_URL}`;

  constructor(public HTTP: HttpClient, private authService: AuthService) {}

  loginUser(userLogin: IUserLogin): Observable<IUserResponseLogin> {
    return this.HTTP.post<IUserResponseLogin>(
      `${this.API}/auth/login`,
      userLogin
    ).pipe(
      take(1),
      tap((response: IUserResponseLogin) => {
        this.authService.userSession(response);
      })
    );
  }
}
