import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-wayay-data-binding',
  templateUrl: './two-wayay-data-binding.component.html',
  styleUrls: ['./two-wayay-data-binding.component.css']
})
export class TwoWayayDataBindingComponent implements OnInit {
  someText = "";

  constructor() { }

  ngOnInit(): void {
  }

}
