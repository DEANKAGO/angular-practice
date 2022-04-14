import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  classMethod="btn btn-primary"

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      // console.log('this will run after 4 seconds')
      this.classMethod = 'btn btn-success';
    }, 4000);
  }

}
