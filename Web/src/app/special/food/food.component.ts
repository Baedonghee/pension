import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foodimg: string;
 
  constructor() { 
  	this.foodimg = '../../../assets/img/special/beaf.png';
  }

  ngOnInit() {
  }

  
}
