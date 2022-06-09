import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss']
})
export class AuthenticatedComponent implements OnInit {

  role = '';
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const roles = this.authService.isStudent();
    if(roles === false) {
      this.role = 'Recruiter'
    }
    this.role = 'Student'
  }

}
