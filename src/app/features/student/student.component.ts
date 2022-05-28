import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent{
  constructor(
    private sidebarService: NbSidebarService
  ) { }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
