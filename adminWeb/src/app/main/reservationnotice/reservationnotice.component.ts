import { Component, OnInit, ViewChild } from '@angular/core';

import { MainAuthService } from '../shared/main.service';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'app-reservationnotice',
  templateUrl: './reservationnotice.component.html',
  styleUrls: ['./reservationnotice.component.css']
})
export class ReservationnoticeComponent implements OnInit {

  @ViewChild('noticemodal')
  noticemodal: ModalComponent;

  reservationnoticearray = [];
  reservationcontent: string;
  

  constructor(private mainauthservice: MainAuthService) { 

  }

  ngOnInit() {
  	this.mainauthservice.getinReservationnotice().subscribe(res => {
  		if(res.status == 'success') {
  			let j = 1;
	  		for(let i=0; i<res.data.length; i++) {

	  			let data = {};
	  			data = {
	  				reservationnoticeid: j,
	  				reservationnotice_id: res.data[i].reservationnotice_id,
	  				reservationnotice_noticetitle: res.data[i].reservationnotice_noticetitle,
	  				reservationnotice_userid: res.data[i].reservationnotice_userid,
	  				reservationnotice_noticecontent: res.data[i].reservationnotice_noticecontent,
	  				reservationnotice_noticedate: res.data[i].reservationnotice_noticedate.substring(0,10)
	  			}
	       		this.reservationnoticearray[res.data.length-(i+1)] = data;
	       		j++;
	  		}
  		}else {
  			alert('Server error');
  		}
  	}, error => {
  		alert('Server error');
  	});
  }

  onDelete(reservation) {
  	this.mainauthservice.deleteinReservationnotice(reservation.reservationnotice_id).subscribe(res => {
  		if(res.status == 'success') {
  			alert('해당게시물이 삭제되었습니다.');
  			for(let i=0; i<this.reservationnoticearray.length; i++) {
	          if(this.reservationnoticearray[i].reservationnotice_id == reservation.reservationnotice_id)
	            this.reservationnoticearray.splice(i,1);
  			}
  		}else {
  			alert('Server error');
  		}
  	},error => {
  		alert('Server error');
  	});
  }

  onNoticeinfo(reservation) {
    this.reservationcontent = reservation.reservationnotice_noticecontent;
  }

  
}
