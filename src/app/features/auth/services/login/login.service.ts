import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IUserLogin } from './../../models/user-login/user-login.model';
import { IUserResponseLogin } from './../../models/user-login/user-response-login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = `${environment.API_URL}`;

  constructor(
    public HTTP: HttpClient
    ) {}

  loginUser(userLogin: IUserLogin): Observable<IUserResponseLogin> {
    return this.HTTP.post<IUserResponseLogin>(
      `${this.API}/auth/login`,
      userLogin
    ).pipe(
      take(1),
      tap((response: IUserResponseLogin) => response)
    );
  }
}
