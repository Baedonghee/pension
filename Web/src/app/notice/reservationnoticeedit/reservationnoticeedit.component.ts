import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { NoticeAuthService } from '../shared/notice.service';
@Component({
  selector: 'app-reservationnoticeedit',
  templateUrl: './reservationnoticeedit.component.html',
  styleUrls: ['./reservationnoticeedit.component.css']
})
export class ReservationnoticeeditComponent implements OnInit {

  private sub:Object;
  editreservation: any;
  name: string;
  password: string;
  subject: string;
  content: string;

  constructor(private route: ActivatedRoute, private noticeauthservice: NoticeAuthService, private router: Router) { 	
  	this.sub = this.route.params.subscribe(params => {
      this.editreservation = params;
      this.name = this.editreservation.reservation_notice_userid;
      this.subject = this.editreservation.reservation_notice_title;
      this.content = this.editreservation.reservation_notice_content;
    });
  }

  ngOnInit() {
  
  }

  reservationnoticeedit() {
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
      this.noticeauthservice.putinReservationNotice(this.editreservation.reservation_notice_id ,data).subscribe(files => {
        if(files.status == "success"){
          this.router.navigate(['/notice/reservationnotice']);
        }
        else {
          alert("Server error");
        }
      }, error => {
        alert("Server error");
      });
    }
  }
}