import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  introImg: string;

  constructor() { 
  	this.introImg = '../../../assets/img/about/about1.png';
  }

  ngOnInit() {
  }

}