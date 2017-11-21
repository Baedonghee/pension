import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour3',
  templateUrl: './tour3.component.html',
  styleUrls: ['./tour3.component.css']
})
export class Tour3Component implements OnInit {

  leftphoto: string;
  rightphoto1: string;
  rightphoto2: string;


  constructor() { 
  	this.leftphoto = "../../../assets/img/tour/tour3_1.png";
  	this.rightphoto1 = "../../../assets/img/tour/tour3_2.png";
  	this.rightphoto2 = "../../../assets/img/tour/tour3_3.png";
  }

  ngOnInit() {
  
  }

}