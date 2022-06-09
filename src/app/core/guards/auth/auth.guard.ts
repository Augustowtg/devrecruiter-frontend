import { Injectable } from '@angular/core';
import { CanActivateChild, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }
  canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const logged: boolean = this.authService.isUserLogged();
    if(logged === true) {
      return true
    }
    return this.router.navigate(['/auth/login']);
  }
  
}
