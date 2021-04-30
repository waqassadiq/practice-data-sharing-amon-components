import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childName: String;
  @Input() childParentName: string;

  @Output() newGiftEvent = new EventEmitter<string>();

  constructor() {
    this.childName = "John"
  }

  addNewItem(value: string) {
    this.newGiftEvent.emit(value);
  }

  ngOnInit(): void {
  }

}
