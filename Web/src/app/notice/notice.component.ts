import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  constructor(private showbanner: AppComponent) { 
  	this.showbanner.viewbanner(1);
  }

  ngOnInit() {
  }

}
