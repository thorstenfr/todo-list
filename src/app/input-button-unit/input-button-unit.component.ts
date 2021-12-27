import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <p>
    input-button-unit works!
    The title is: {{ title }}
  </p>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
	title: string = 'Hello World';

  constructor() { 
    this.title = 'I love Angular'; 
    this.changeTitle('My Firsrt Aular App');
  }

   ngOnInit(): void {
     
   }

   changeTitle(newTitle: string) {
     this.title = newTitle;
   }

}
