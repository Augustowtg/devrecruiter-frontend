import { Component } from '@angular/core';
import { INavMenu } from '../../models/INavMenu';

@Component({
  selector: 'app-not-logged-nav',
  templateUrl: './not-logged-nav.component.html',
  styleUrls: ['./not-logged-nav.component.scss']
})
export class NotLoggedNavComponent {
  menuItems: INavMenu[] = [
    {
      label: 'Entrar',
      href: './auth/login'
    },
    {
      label: 'registrar',
      href: './auth/register'
    }
  ];
}
