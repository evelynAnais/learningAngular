import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  times: number = 7;
  status: string = 'Now';

  constructor() {
    this.status = Math.random() > 0.5 ? 'Now' : 'Ahora';
  }

  getStatus(): string {
    return this.status;
  }

  getColor(): string {
    return this.status === 'Now' ? 'rgba(216, 230, 14, 0.521)' : 'rgba(14, 230, 104, 0.521)';
  }

  ngOnInit(): void {
  }

}
