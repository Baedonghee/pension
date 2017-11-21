import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerImg: string;
  aboutshow: number;
  roomshow: number;
  specialshow: number;
  reservationshow: number;
  tourshow: number;
  communityshow: number;

  constructor() { 
  	this.aboutshow = 0;
  	this.roomshow = 0;
  	this.specialshow = 0;
  	this.reservationshow = 0;
  	this.tourshow = 0;
  	this.communityshow = 0;
  	this.headerImg = '../assets/img/header/header.png';
  }

  ngOnInit() {
  }

  mouseEnterAbout(div: number) {
  	this.aboutshow = div;
  }
  mouseLeaveAbout(div: number) {
  	this.aboutshow = div;
  }
  mouseEnterRoom(div: number) {
  	this.roomshow = div;
  }
  mouseLeaveRoom(div: number) {
  	this.roomshow = div;
  }
  mouseEnterSpecial(div: number) {
  	this.specialshow = div;
  }
  mouseLeaveSpecial(div: number) {
  	this.specialshow = div;
  }
  mouseEnterReservation(div: number) {
  	this.reservationshow = div;
  }
  mouseLeaveReservation(div: number) {
  	this.reservationshow = div;
  }
  mouseEnterTour(div: number) {
  	this.tourshow = div;
  }
  mouseLeaveTour(div: number) {
  	this.tourshow = div;
  }
  mouseEnterCommunity(div: number) {
  	this.communityshow = div;
  }
  mouseLeaveCommunity(div: number) {
  	this.communityshow = div;
  }
}
