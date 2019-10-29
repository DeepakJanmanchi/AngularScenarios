import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  // templateUrl: './component1.component.html',
  template:
  `
  <h2> Enter something  </h2>
  <input type="text" #myInput>
  <button type="submit" (click)= "onClick(myInput.value)"> submit </button>


  `,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }
  onClick(value){
    console.log(value);
  }
}
