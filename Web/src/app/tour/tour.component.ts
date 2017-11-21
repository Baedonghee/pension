import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  constructor(private showbanner: AppComponent) { 
  	this.showbanner.viewbanner(1);
  }

  ngOnInit() {
  }

}
