import { Injectable } from '@angular/core';

import { IUserResponseLogin } from './../../../features/auth/models/user-login/user-response-login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // Função para remover credenciais do usuário deslogado
  public logoutUser(): void {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('userId');
  }


  // Função para verificar se o usuário está logado
  public isUserLogged(): boolean {
    if (localStorage.getItem('Authorization')) {
      return true;
    } else {
      this.logoutUser();
      return false
    }
  }

  public userSession(session: IUserResponseLogin): void {
    localStorage.setItem('Authorization', `${session.token}`);
    localStorage.setItem('Role', `${session.role}`);
  }

  public  isRecruiter(): boolean { 
    const role = localStorage.getItem('Role');
    if(role === 'true') {
      return true
    }
    return false
  }

  public  isStudent(): boolean { 
    let role = localStorage.getItem('Role');
    if(role === 'false') {
      console.log('Student guard true')
      return true
    }
    return false
  }
}
