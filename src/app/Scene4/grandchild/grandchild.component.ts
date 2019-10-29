import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  template: `
  <h2>{{"Hello" + parentData}}</h2>
  <button (click)="fireEvent()">Send Data!</button>`,

  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {
  @Input() public parentData;
 @Output()public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('Hey Mama');
  }

}
