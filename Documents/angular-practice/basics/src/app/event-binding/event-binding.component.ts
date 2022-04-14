import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  clicks = 0;

  myCoolButtonClicked () {
    console.log('Hi This button has been clicked');
    this.clicks++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
