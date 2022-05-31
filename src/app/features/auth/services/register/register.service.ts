import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IUserRegister } from '../../models/user-register/user-register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly API = `${environment.API_URL}`;

  constructor(
    public HTTP: HttpClient
  ) { }

  // Função para fazer o registro de um usuário
  public registerUser(user: IUserRegister): Observable<IUserRegister> {
    return this.HTTP.post<IUserRegister>(
      `${this.API}/users/register`,
      user
    ).pipe(
      take(1),
      tap((response: IUserRegister) => response)
    );
  }
}
