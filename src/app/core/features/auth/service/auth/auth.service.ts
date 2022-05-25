import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public HTTP: HttpClient) {}

  public isLogged(): boolean {
    if (localStorage.getItem('Authorization')) {
      return true;
    } else {
      this.logout();
      return false;
    }
  }

  public logout(): void {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('userId');
  }
}
