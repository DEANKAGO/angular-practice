import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-polation',
  templateUrl: './inter-polation.component.html',
  styleUrls: ['./inter-polation.component.css']
})
export class InterPolationComponent implements OnInit {
  name: string = 'Interpolation component';
  cars = ["Totota", "Mazda", "BMW"];
  person = { name: 'Angie', age:23, cars: ' Toyota'};
  isRich = true;


  constructor() { 
    setTimeout(() => {
      // console.log('this will run after 4 seconds')
      this.name = 'interpolation component 2.0.0';
    }, 4000);
  }

  numberOfCars =() => {
   return this.cars.length
  }




  ngOnInit(): void {
  }

}
