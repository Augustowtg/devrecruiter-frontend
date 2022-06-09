import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-internal',
  templateUrl: './navbar-internal.component.html',
  styleUrls: ['./navbar-internal.component.scss']
})
export class NavbarInternalComponent {
  @Input() role = '';
}
