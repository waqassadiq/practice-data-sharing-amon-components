import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-data-sharing-amon-components';

  parentName: String;
  giftAsked: String;

  constructor(){
    this.parentName = "Smith";
  }

  requestGift(giftName: String){
    this.giftAsked = giftName;
  }
}
