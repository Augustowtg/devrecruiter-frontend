import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-navbar-landing',
  templateUrl: './navbar-landing.component.html',
  styleUrls: ['./navbar-landing.component.scss']
})
export class NavbarLandingComponent {
  allitems = [
    { title: 'Sobre' },
    { title: 'Entrar' },
    { title: 'Registrar' }
  ];

}
