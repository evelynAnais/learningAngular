import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  times: number = 7;

  constructor() { }

  ngOnInit(): void {
  }

}
