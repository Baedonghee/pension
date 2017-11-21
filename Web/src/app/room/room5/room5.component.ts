import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room5',
  templateUrl: './room5.component.html',
  styleUrls: ['./room5.component.css']
})
export class Room5Component implements OnInit {

  roommain: string;
  room1main: string;
  room2main: string;
  room3main: string;
  room4main: string;
  room5main: string;

  constructor() { 
  	
    this.room1main = '../../../assets/img/room/room5/room5view1.png'; 
    this.room2main = '../../../assets/img/room/room5/room5view2.png'; 
    this.room3main = '../../../assets/img/room/room5/room5view3.png'; 
    this.room4main = '../../../assets/img/room/room5/room5view4.png'; 
    this.room5main = '../../../assets/img/room/room5/room5view5.png'; 
    this.roommain = this.room1main;
  }

  ngOnInit() {
  }
  prepage() {
  	this.room1main = '../../../assets/img/room/room5/room5view1.png'; 
    this.room2main = '../../../assets/img/room/room5/room5view2.png'; 
    this.room3main = '../../../assets/img/room/room5/room5view3.png'; 
    this.room4main = '../../../assets/img/room/room5/room5view4.png'; 
    this.room5main = '../../../assets/img/room/room5/room5view5.png'; 
  }

  nextpage() {
  	this.room1main = '../../../assets/img/room/room5/room5view6.png'; 
    this.room2main = '../../../assets/img/room/room5/room5view7.png'; 
    this.room3main = ''; 
    this.room4main = ''; 
    this.room5main = ''; 
  }
  imageChange(img: string) {
  	this.roommain = img;
  }

}