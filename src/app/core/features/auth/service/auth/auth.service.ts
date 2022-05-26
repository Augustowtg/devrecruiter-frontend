import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, tap } from 'rxjs';

import { environment } from './../../../../../../environments/environment';
import { IUserResponseLogin } from './../../../models/user/user-login/response-login/user-response-login.model';
import { IUserLogin } from './../../../models/user/user-login/user-login.model';
import { IUserRegister } from './../../../models/user/user-register/user-register.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API = `${environment.API_URL}`;

  constructor(public HTTP: HttpClient) {}

  // função para fazer o registro de um usuário
  public registerUser(user: IUserRegister): Observable<IUserRegister> {
    return this.HTTP.post<IUserRegister>(
      `${this.API}/users/register`,
      user
    ).pipe(
      take(1),
      tap((response: IUserRegister) => response)
    );
  }

  // função para fazer o login de um usuário
  public loginUser(user: IUserLogin): Observable<IUserResponseLogin> {
    return this.HTTP.post<IUserResponseLogin>(
      `${this.API}/users/login`,
      user
    ).pipe(
      take(1),
      tap((response: IUserResponseLogin) => response)
    );
  }

  // função para verificar se o usuário está logado
  public isUserLogged(): boolean {
    if (localStorage.getItem('Authorization')) {
      return true;
    } else {
      this.logoutUser();
      return false;
    }
  }

  // função para remover credenciais do usuário deslogado
  public logoutUser(): void {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('userId');
  }
}
