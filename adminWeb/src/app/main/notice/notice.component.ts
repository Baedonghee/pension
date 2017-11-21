import { Component, OnInit, ViewChild } from '@angular/core';
import { MainAuthService } from '../shared/main.service';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  @ViewChild('noticemodal')
  noticemodal: ModalComponent;

  noticelist = [];
  noticecontent: string;

  constructor(private mainauthservice: MainAuthService, private router: Router) {

  }

  ngOnInit() {
  	this.mainauthservice.getinNotice().subscribe(files => {
  		let j = 1;
  		for(let i=0; i<files.data.length; i++) {

  			let data = {};
  			data = {
  				noticeid: j,
  				notice_id: files.data[i].notice_id,
  				notice_title: files.data[i].notice_title,
  				notice_userid: files.data[i].user_id,
  				notice_content: files.data[i].notice_content,
  				notice_date: files.data[i].notice_date.substring(0,10)
  			}
       		this.noticelist[files.data.length-(i+1)] = data;
       		j++;
  		}
  	}, error => {
  		alert('Server error');
  	})
  }
  onEdit(notice) {
  	this.router.navigate(['/main/notice/edit', notice]);
  }
  onDelete(notice) {
    this.mainauthservice.deleteinNotice(notice.notice_id).subscribe(res => {
      if(res.status == "success"){
        for(let i=0; i<this.noticelist.length; i++) {
          if(this.noticelist[i].notice_id == notice.notice_id)
            this.noticelist.splice(i,1);
        }
      }else {
        alert('Server error');
      }
    }, error => {
      alert('Server error');
    });
  }
  onNoticeinfo(notice) {
    this.noticecontent = notice.notice_content;
  }

}