import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  images;

  constructor() { 
  	this.images = [
  		{"url": '../../../assets/img/about/aboutview1.png'},
      {"url": '../../../assets/img/about/aboutview2.png'},
      {"url": '../../../assets/img/about/aboutview3.png'},
      {"url": '../../../assets/img/about/aboutview4.png'},
      {"url": '../../../assets/img/about/aboutview5.png'},
      {"url": '../../../assets/img/about/aboutview6.png'},
      {"url": '../../../assets/img/about/aboutview7.png'},
      {"url": '../../../assets/img/about/aboutview8.png'},
      {"url": '../../../assets/img/about/aboutview9.png'},
      {"url": '../../../assets/img/about/aboutview10.png'},
      {"url": '../../../assets/img/about/aboutview11.png'},
      {"url": '../../../assets/img/about/aboutview12.png'}
  	]
  }

  ngOnInit() {
  }

}