import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  mainaboutImg: string;
  mainroomImg: string;
  mainetcImg: string;
  maineventImg: string;
  mainreservationImg: string;
  


  constructor(private showbanner: AppComponent) { 
  	this.mainaboutImg = '../../assets/img/main/main.png';
  	this.mainroomImg = '../../assets/img/main/mainroom.png';
    this.mainetcImg = '../../assets/img/main/mainsmallimage.png';
    this.maineventImg = '../../assets/img/main/mainevent.png';
    this.mainreservationImg = '../../assets/img/main/mainreservation.png';
    this.showbanner.viewbanner(0);
  }

  

  ngOnInit() {
  }

}
