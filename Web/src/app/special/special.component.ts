import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {

  constructor(private showbanner: AppComponent) { 
  	this.showbanner.viewbanner(1);
  }

  ngOnInit() {
  }

}
