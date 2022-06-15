import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ISidebarNav } from '../../models/sidebar-nav/SidebarNav';

@Component({
  selector: 'app-sidebar-internal',
  templateUrl: './sidebar-internal.component.html',
  styleUrls: ['./sidebar-internal.component.scss']
})
export class SidebarInternalComponent implements OnInit {
  @Input() role ='';

  routerRecruiterNav: ISidebarNav[] = [
    {
      name: 'Cadastro de vagas',
      router: '/',
      icon: ''
    }
  ]
  routerStudentNav: ISidebarNav[] = [
    {
      name: 'Curriculo',
      router: 'student',
      icon: 'description'
    }
  ]
  sideNav: ISidebarNav[] = []
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if(this.role === 'recruiter') {
      this.sideNav = this.routerRecruiterNav
    }
    this.sideNav = this.routerStudentNav
  }

  public logout(): void {
    this.authService.logoutUser()
  }
}
