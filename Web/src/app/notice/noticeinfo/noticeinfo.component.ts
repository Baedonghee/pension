import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { NoticeAuthService } from '../shared/notice.service';

@Component({
  selector: 'app-noticeinfo',
  templateUrl: './noticeinfo.component.html',
  styleUrls: ['./noticeinfo.component.css']
})
export class NoticeinfoComponent implements OnInit {

  noticelist= [];
  p: number = 1;

  constructor(private noticeauthservice: NoticeAuthService, private router: Router) { 
  	this.getlistnotice();

  }

  getlistnotice() {
  	this.noticeauthservice.getinNotice().subscribe(files => {
      if(files.status == "success"){
        let j = 1;
    		for(let i=0; i<files.data.length; i++) {
    			let data = {};
    			data = {
    				noticeid: j,
    				notice_id: files.data[i].notice_id,
    				notice_title: files.data[i].notice_title,
    				notice_userid: files.data[i].user_id,
    				notice_content: files.data[i].notice_content,
            notice_count: files.data[i].notice_count,
    				notice_date: files.data[0].notice_date.substring(0,10)
    			}
          this.noticelist[files.data.length-(i+1)] = data;
          j++;
    		}
      }else {
        alert("Server error");
      }
  	}, error => {
  		alert("error");
  	});
  }

  ngOnInit() {
  
  }
  onClickDetailnotice(notice) {
    this.noticeauthservice.postinNoice(notice.notice_id).subscribe(files => {
      if(files.status == "success") {
        this.router.navigate(['/notice/detail', notice]);
      }else {
        alert("Server error");
      }
    }, error => {
      alert("error");
    });
  	
  }

}