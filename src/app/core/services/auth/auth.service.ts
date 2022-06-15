import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IUserResponseLogin } from './../../../features/auth/models/user-login/user-response-login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  // Função para remover credenciais do usuário deslogado
  public logoutUser(): void {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('userId');
    localStorage.removeItem('Role');
    this.router.navigate(['/'])
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
    let role: string | null = localStorage.getItem('Role');

    if(role === 'true') {
      this.router.navigate(['student'])
    }
    this.router.navigate(['recruiter'])
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
      return true
    }
    return false
  }
}
