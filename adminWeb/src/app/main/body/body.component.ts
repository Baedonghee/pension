import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mainImg: string;

  constructor() { }

  ngOnInit() {
  	this.mainImg = 'https://s3.ap-northeast-2.amazonaws.com/dongheeboard/18.jpg';
  	
  }

}