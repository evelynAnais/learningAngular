import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  name: string = 'Bob';
  colorsChange: string = 'background-color: purple';
  dance: string = 'dancing';
  answer: string = '';

  getName(): string {
    return this.name;
  }

  constructor() {
    setTimeout((): void => {
      this.colorsChange = "background-color: white";
    }, 1000)
}

onCreateDance(): void {
  this.dance = "dance";
  this.colorsChange = "background-color: purple";
}

onUpdateAnswer(event: Event): void {
  console.log(event);
  this.answer = (<HTMLInputElement>event.target).value;
}

  ngOnInit(): void {
  }

}
