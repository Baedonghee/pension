import { Component,ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  bannerImg: string;
  showbanner: number;
  showpopup: number;


  constructor() { 
    let date = new Date();
    let current = Math.round((date.setSeconds(date.getSeconds()))/1000);
    let beforetime = parseInt(localStorage.getItem('setTimeout'));
    if(!isNaN(beforetime)) {
      if(current > beforetime) {
        this.showpopup = 1;
      }else {
        this.showpopup = 0;
      }
    }else {
      this.showpopup = 1;
    }
    
  	this.showbanner = 0;
  	this.bannerImg = '../assets/img/header/banner.png';
  }

  ngOnInit() {
  }

  viewbanner(show: number) {
  	this.showbanner = show;
  }
  onclose() {
    this.showpopup = 0;
  }
  onopen() {
    this.showpopup = 1;
  }
  
}

