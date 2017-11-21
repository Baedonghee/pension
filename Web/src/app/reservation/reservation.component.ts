import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private showbanner: AppComponent) { 
  	this.showbanner.viewbanner(1);
  }

  ngOnInit() {
  }

}
