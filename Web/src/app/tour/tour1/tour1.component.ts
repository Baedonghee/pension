import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour1',
  templateUrl: './tour1.component.html',
  styleUrls: ['./tour1.component.css']
})
export class Tour1Component implements OnInit {

  leftphoto: string;
  rightphoto1: string;
  rightphoto2: string;


  constructor() { 
  	this.leftphoto = "../../../assets/img/tour/tour1_1.png";
  	this.rightphoto1 = "../../../assets/img/tour/tour1_2.png";
  	this.rightphoto2 = "../../../assets/img/tour/tour1_3.png";
  }

  ngOnInit() {
  
  }

}