import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit {

 
  pickupimg: string;

  constructor() { 
  	this.pickupimg = '../../../assets/img/special/pickup.png';
  }

  ngOnInit() {
  }

  
}
