import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  name: string = 'Bob';

  getName(): string {
    return this.name;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
