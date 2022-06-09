import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivateChild {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const logged: boolean = this.authService.isStudent();
    if(logged === true) {
      return true
    }
    return this.router.navigate(['/auth/login']);
  }
  
}
