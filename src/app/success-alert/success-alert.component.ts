import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  name: string = '';
  colorsChange: string = 'background-color: purple';
  dance: string = '';
  answer: string = '';
  yourName: string = '';
  reset: string = '';
  submitted = false;
  add = ['']

  constructor() {
    setTimeout((): void => {
      this.add.push(this.name)
    }, 10000)
}

onCreateDance(): void {
  this.submitted = true;
  this.add.push(this.answer)
  this.dance = " Because " + this.answer;
  this.colorsChange = "background-color: white";
  this.yourName = this.name + " is dancing";
  this.getReset();
}

getReset(): void {
    this.answer = '';
    this.name = '';
  }

onUpdateAnswer(event: Event): void {
  console.log(event);
  this.answer = (<HTMLInputElement>event.target).value;
}

  ngOnInit(): void {
  }

}
