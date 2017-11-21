import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  room1img: string;
  selectedImage: string;
  room2img: string;
  room3img: string;
  room4img: string;
  room5img: string;

  constructor() { 
  	this.room1img = '../../assets/img/room/roommain/roommain1.png';
    this.room2img = '../../assets/img/room/roommain/room2main.png';
    this.room3img = '../../assets/img/room/roommain/room3main.png';
    this.room4img = '../../assets/img/room/roommain/room4main.png';
    this.room5img = '../../assets/img/room/roommain/room5main.png';

  }

  ngOnInit() {
  }

  setSelectedImage() {
  	this.selectedImage = '../../assets/img/room/roommain/roommain1.png';
  }
  setSelectedImage2() {
    this.selectedImage = '../../assets/img/room/roommain/room2main.png';
  }
  setSelectedImage3() {
    this.selectedImage = '../../assets/img/room/roommain/room3main.png';
  }
  setSelectedImage4() {
    this.selectedImage = '../../assets/img/room/roommain/room4main.png';
  }
  setSelectedImage5() {
    this.selectedImage = '../../assets/img/room/roommain/room5main.png';
  }
}
