import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NoticeAuthService } from '../shared/notice.service';

@Component({
  selector: 'app-reservationnotice',
  templateUrl: './reservationnotice.component.html',
  styleUrls: ['./reservationnotice.component.css']
})
export class ReservationnoticeComponent implements OnInit {

  reservationnotice = [];
  p: number = 1;
  


  constructor(private noticeauthservice: NoticeAuthService, private router: Router) { 
  	this.loadnoticereservation();
  }

  ngOnInit() {
  
  }
  
  loadnoticereservation() {
  	this.noticeauthservice.getinReservationNotice().subscribe(files => {
      if(files.status == "success"){
        let j = 1;
    		for(let i=0; i<files.data.length; i++) {
        
  			let data = {};
  			data = {
  				reservation_noticeid: j,
  				reservation_notice_id: files.data[i].reservationnotice_id,
  				reservation_notice_title: files.data[i].reservationnotice_noticetitle,
  				reservation_notice_userid: files.data[i].reservationnotice_userid,
  				reservation_notice_content: files.data[i].reservationnotice_noticecontent,
  				reservation_notice_noticecount: files.data[i].reservationnotice_noticecount,
  				reservation_notice_date: files.data[0].reservationnotice_noticedate.substring(0,10)
  			}
  			this.reservationnotice[files.data.length-(i+1)] = data;
        j=j+1;
  		}
    }else {
      alert("Server error");
    }
  	},error => {
  		alert("error");
  	});
  }

  onClickDetailreservation(reservation) {
  	this.router.navigate(['/notice/reservationnotice/detail', reservation]);
  }
}