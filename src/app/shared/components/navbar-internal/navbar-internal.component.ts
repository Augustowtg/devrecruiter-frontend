import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-internal',
  templateUrl: './navbar-internal.component.html',
  styleUrls: ['./navbar-internal.component.scss']
})
export class NavbarInternalComponent implements OnInit {

  role: any = localStorage.getItem("ROLE")

  constructor() { }

  ngOnInit(): void {
    console.log(this.role)
  }

}
