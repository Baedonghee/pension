import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room4',
  templateUrl: './room4.component.html',
  styleUrls: ['./room4.component.css']
})
export class Room4Component implements OnInit {

  roommain: string;
  room1main: string;
  room2main: string;
  room3main: string;
  room4main: string;
  room5main: string;

  constructor() { 
  	
    this.room1main = '../../../assets/img/room/room4/room4view1.png'; 
    this.room2main = '../../../assets/img/room/room4/room4view2.png'; 
    this.room3main = '../../../assets/img/room/room4/room4view3.png'; 
    this.room4main = '../../../assets/img/room/room4/room4view4.png'; 
    this.room5main = '../../../assets/img/room/room4/room4view5.png'; 
    this.roommain = this.room1main;
  }

  ngOnInit() {
  }
  prepage() {
  	this.room1main = '../../../assets/img/room/room4/room4view1.png'; 
    this.room2main = '../../../assets/img/room/room4/room4view2.png'; 
    this.room3main = '../../../assets/img/room/room4/room4view3.png'; 
    this.room4main = '../../../assets/img/room/room4/room4view4.png'; 
    this.room5main = '../../../assets/img/room/room4/room4view5.png'; 
  }

  nextpage() {
  	this.room1main = '../../../assets/img/room/room4/room4view6.png'; 
    this.room2main = '../../../assets/img/room/room4/room4view7.png'; 
    this.room3main = ''; 
    this.room4main = ''; 
    this.room5main = ''; 
  }
  imageChange(img: string) {
  	this.roommain = img;
  }

}