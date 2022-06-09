import { Component, Input, OnInit } from '@angular/core';
import { ISidebarNav } from '../../modules/sidebar-nav/SidebarNav';

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
      router: '/'
    }
  ]
  routerStudentNav: ISidebarNav[] = [
    {
      name: 'Perfil',
      router: 'user/perfil'
    }
  ]
  sideNav: ISidebarNav[] = []
  constructor() { }

  ngOnInit(): void {
    if(this.role === 'recruiter') {
      this.sideNav = this.routerRecruiterNav
    }
    this.sideNav = this.routerStudentNav
  }

}
