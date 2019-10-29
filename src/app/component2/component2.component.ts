import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  // templateUrl: './component1.component.html',
  template:
  `
  <h2> Enter something  </h2>
  <input [(ngModel)]="name" type="text" #myInput>
  {{name}}
  <button type="submit" (click)= "onClick(myInput.value)"> submit </button>


  `,
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public name = "";

  constructor() { }

  ngOnInit() {
  }
  onClick(value){
    console.log(value);
  }
}
