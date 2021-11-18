import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('HomeComponent.ngOnInit()');
  }
}