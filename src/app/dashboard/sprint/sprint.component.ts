import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent {
  @Input() sprint: any;
  @Input() data: any;
}
