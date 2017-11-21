import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singroom',
  templateUrl: './singroom.component.html',
  styleUrls: ['./singroom.component.css']
})
export class SingroomComponent implements OnInit {

 
  singroomimg: string;

  constructor() { 
  	this.singroomimg = '../../../assets/img/special/sing.png';
  }

  ngOnInit() {
  }

  
}
