import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour4',
  templateUrl: './tour4.component.html',
  styleUrls: ['./tour4.component.css']
})
export class Tour4Component implements OnInit {

  leftphoto: string;
  rightphoto1: string;
  rightphoto2: string;


  constructor() { 
  	this.leftphoto = "../../../assets/img/tour/tour4_1.png";
  	this.rightphoto1 = "../../../assets/img/tour/tour4_2.png";
  	this.rightphoto2 = "../../../assets/img/tour/tour4_3.png";
  }

  ngOnInit() {
  
  }

}