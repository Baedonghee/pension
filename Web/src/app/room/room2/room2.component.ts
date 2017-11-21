import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room2',
  templateUrl: './room2.component.html',
  styleUrls: ['./room2.component.css']
})
export class Room2Component implements OnInit {

  roommain: string;
  room1main: string;
  room2main: string;
  room3main: string;
  room4main: string;
  room5main: string;

  constructor() { 
  	
    this.room1main = '../../../assets/img/room/room2/room2view1.png'; 
    this.room2main = '../../../assets/img/room/room2/room2view2.png'; 
    this.room3main = '../../../assets/img/room/room2/room2view3.png'; 
    this.room4main = '../../../assets/img/room/room2/room2view4.png'; 
    this.room5main = '../../../assets/img/room/room2/room2view5.png'; 
    this.roommain = this.room1main;
  }

  ngOnInit() {
  }
  prepage() {
  	this.room1main = '../../../assets/img/room/room2/room2view1.png'; 
    this.room2main = '../../../assets/img/room/room2/room2view2.png'; 
    this.room3main = '../../../assets/img/room/room2/room2view3.png'; 
    this.room4main = '../../../assets/img/room/room2/room2view4.png'; 
    this.room5main = '../../../assets/img/room/room2/room2view5.png'; 
  }

  nextpage() {
  	this.room1main = '../../../assets/img/room/room2/room2view6.png'; 
    this.room2main = '../../../assets/img/room/room2/room2view7.png'; 
    this.room3main = '../../../assets/img/room/room2/room2view8.png'; 
    this.room4main = '../../../assets/img/room/room2/room2view9.png'; 
    this.room5main = ''; 
  }
  imageChange(img: string) {
  	this.roommain = img;
  }

}