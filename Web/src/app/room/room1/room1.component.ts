import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room1',
  templateUrl: './room1.component.html',
  styleUrls: ['./room1.component.css']
})
export class Room1Component implements OnInit {

  roommain: string;
  room1main: string;
  room2main: string;
  room3main: string;
  room4main: string;
  room5main: string;
  

  constructor() { 
    this.roommain = '../../../assets/img/room/room1/roomview1.png'; 
  	this.room1main = '../../../assets/img/room/room1/roomview2.png'; 
  	this.room2main = '../../../assets/img/room/room1/roomview3.png'; 
  	this.room3main = '../../../assets/img/room/room1/roomview4.png'; 
  	this.room4main = '../../../assets/img/room/room1/roomview5.png'; 
  	this.room5main = '../../../assets/img/room/room1/roomview6.png'; 
  }

  ngOnInit() {
  }
  prepage() {
  	this.room1main = '../../../assets/img/room/room1/roomview2.png'; 
    this.room2main = '../../../assets/img/room/room1/roomview3.png'; 
    this.room3main = '../../../assets/img/room/room1/roomview4.png'; 
    this.room4main = '../../../assets/img/room/room1/roomview5.png'; 
    this.room5main = '../../../assets/img/room/room1/roomview6.png'; 
  }

  nextpage() {
  	this.room1main = '../../../assets/img/room/room1/roomview7.png'; 
    this.room2main = '../../../assets/img/room/room1/roomview8.png'; 
    this.room3main = '../../../assets/img/room/room1/roomview9.png'; 
    this.room4main = '../../../assets/img/room/room1/roomview10.png'; 
    this.room5main = '../../../assets/img/room/room1/roomview11.png'; 
  }
  imageChange(img: string) {
  	this.roommain = img;
  }

}