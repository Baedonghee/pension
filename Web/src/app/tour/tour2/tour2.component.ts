import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour2',
  templateUrl: './tour2.component.html',
  styleUrls: ['./tour2.component.css']
})
export class Tour2Component implements OnInit {

  leftphoto: string;
  rightphoto1: string;
  rightphoto2: string;


  constructor() { 
  	this.leftphoto = "../../../assets/img/tour/tour2_1.png";
  	this.rightphoto1 = "../../../assets/img/tour/tour2_2.png";
  	this.rightphoto2 = "../../../assets/img/tour/tour2_3.png";
  }

  ngOnInit() {
  
  }

}