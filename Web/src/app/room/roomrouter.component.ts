import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-roomrouter',
  templateUrl: './roomrouter.component.html',
  styleUrls: ['./roomrouter.component.css']
})
export class RoomrouterComponent implements OnInit {

  
  constructor(private showbanner: AppComponent) { 
  	this.showbanner.viewbanner(1);
  }

  ngOnInit() {
  }

  
}
