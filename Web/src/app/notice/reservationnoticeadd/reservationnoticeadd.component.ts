import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NoticeAuthService } from '../shared/notice.service';

@Component({
  selector: 'app-reservationnoticeadd',
  templateUrl: './reservationnoticeadd.component.html',
  styleUrls: ['./reservationnoticeadd.component.css']
})
export class ReservationnoticeaddComponent implements OnInit {

  name: string;
  password: string;
  subject: string;
  content: string;

  constructor(private noticeauthservice: NoticeAuthService, private router: Router) { 
  	
  }

  ngOnInit() {
  
  }

  reservationnoticeadd() {
  	if(this.name == null || this.password == null || this.subject == null || this.content == null) {
  		alert("모든항목을 다 채워주세요");	
  	}
  	else {
  		let data = {
  			userid: this.name,
  			noticepwd: this.password,
  			noticetitle: this.subject,
  			noticecontent: this.content
  		}
  		this.noticeauthservice.postinReservationNotice(data).subscribe(files => {
  			if(files.status == "success"){
  				this.router.navigate(['/notice/reservationnotice']);
  			}
  			else {
  				alert("서버와 연결이 불안정합니다.");
  			}
  		})
  	}
  }

}