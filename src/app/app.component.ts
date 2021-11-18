import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>heyyyyy</h1>
    <div>My First Angular App</div>
    <pm-home></pm-home>
  </div>  
  `
})
export class AppComponent {
  pageTitle = 'Learning Angular';
}
