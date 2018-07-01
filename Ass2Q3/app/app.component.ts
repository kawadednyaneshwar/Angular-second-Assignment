import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
    `<div>
    <h2>
      Marvellous Infosystems
      <input type="text">
    </h2>
  </div>` ,
  styles: 
  [`input
  {
      background-color:blue;
  }
  h2 {
      color: cadetblue;
  }`]
})
export class AppComponent {
  title = 'app';
}
