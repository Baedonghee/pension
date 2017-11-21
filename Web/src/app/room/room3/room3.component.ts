import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room3',
  templateUrl: './room3.component.html',
  styleUrls: ['./room3.component.css']
})
export class Room3Component implements OnInit {

  roommain: string;
  room1main: string;
  room2main: string;
  room3main: string;
  room4main: string;
  room5main: string;

  constructor() { 
  	
    this.room1main = '../../../assets/img/room/room3/room3view1.png'; 
    this.room2main = '../../../assets/img/room/room3/room3view2.png'; 
    this.room3main = '../../../assets/img/room/room3/room3view3.png'; 
    this.room4main = '../../../assets/img/room/room3/room3view4.png'; 
    this.room5main = '../../../assets/img/room/room3/room3view5.png'; 
    this.roommain = this.room1main;
  }

  ngOnInit() {
  }
  prepage() {
  	this.room1main = '../../../assets/img/room/room3/room3view1.png'; 
    this.room2main = '../../../assets/img/room/room3/room3view2.png'; 
    this.room3main = '../../../assets/img/room/room3/room3view3.png'; 
    this.room4main = '../../../assets/img/room/room3/room3view4.png'; 
    this.room5main = '../../../assets/img/room/room3/room3view5.png'; 
  }

  nextpage() {
  	this.room1main = '../../../assets/img/room/room3/room3view6.png'; 
    this.room2main = '../../../assets/img/room/room3/room3view7.png'; 
    this.room3main = '../../../assets/img/room/room3/room3view8.png'; 
    this.room4main = '../../../assets/img/room/room3/room3view9.png'; 
    this.room5main = '../../../assets/img/room/room3/room3view10.png'; 
  }
  imageChange(img: string) {
  	this.roommain = img;
  }

}