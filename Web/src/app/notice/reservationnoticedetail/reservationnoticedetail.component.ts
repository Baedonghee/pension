import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { NoticeAuthService } from "../shared/notice.service";

@Component({
  selector: 'app-reservationnoticedetail',
  templateUrl: './reservationnoticedetail.component.html',
  styleUrls: ['./reservationnoticedetail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReservationnoticedetailComponent implements OnInit {

  @ViewChild('editmodal')
  @ViewChild('deletemodal')
  @ViewChild('editreplaymodal')
  @ViewChild('deletereplaymodal')

  editmodal: ModalComponent;
  deletemodal: ModalComponent;
  editreplaymodal: ModalComponent;
  deletereplaymodal: ModalComponent;
  private sub:Object;
  reservationnoticedetail: any;
  detailnum: number;
  showdiv = false;
  replayname: string;
  replaypassword: string;
  replaycontent: string;
  editpassword: string;
  deletepassword: string;
  editreplayparams: number;
  editreplaypassword: string;
  deletereplaypassword: string;


  editreplayname: string;
  editreplaycontent: string;

  editreplayshow: number;



  constructor(private route: ActivatedRoute, private noticeauthservice: NoticeAuthService, private router: Router) { 
  	
  }

  loaddetailnotice(params) {
    this.noticeauthservice.getinReservationNoticeDetail(params).subscribe(files => {
      if(files.status == "success") {
        let data = {
          reservation_notice_id: files.data.reservationnotice_id,
          reservation_notice_title: files.data.reservationnotice_noticetitle,
          reservation_notice_userid: files.data.reservationnotice_userid,
          reservation_notice_content: files.data.reservationnotice_noticecontent,
          reservationnotice_noticecount: files.data.reservationnotice_noticecount,
          reservation_notice_date: files.data.reservationnotice_noticedate.substring(0,10),

        }
        this.reservationnoticedetail = data;
        this.reservationnoticedetail.reservation_notice_replay = files.data.reservationreplay;
        this.showdiv = true;
      }else {
        alert("Server error");
      }
    }, error => {
      alert('error');
    })
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.detailnum = params.id;
    });
    this.loaddetailnotice(this.detailnum);
  }
  replayadd() {
    if(this.replayname == null || this.replaypassword == null || this.replaycontent == null){
      alert("모든항목을 채워주세요");
    }
    else {
      let data = {
        userid: this.replayname,
        replaycontent: this.replaycontent,
        replaypwd: this.replaypassword
      }
      this.noticeauthservice.postinReservationNoticeReplay(this.reservationnoticedetail.reservation_notice_id, data).subscribe(files => {
        if(files.status == "success") {
          this.reservationnoticedetail.reservation_notice_replay.push(files.data);
          this.replayname = '';
          this.replaycontent = '';
          this.replaypassword = '';
        }
        else {
          alert("등록불가");
        }

      }, error => {
        alert("서버에러");
      })
    }
  }
  editreplayPassword(replay) {
    this.editreplayname = replay.reservationnoticereplay_userid;
    this.editreplaypassword = '';
    this.editreplaycontent = replay.reservationnoticereplay_content;
    this.editreplayparams = replay.reservationnoticereplay_id;
  }
  editpasswordCheck() {
    let data = {
      password: this.editpassword
    }
    if(this.editpassword == null) {
      alert("비밀번호를 넣어주세요");
    }else {
      this.noticeauthservice.postinReservationNoticeEditPasswordCheck(this.reservationnoticedetail.reservation_notice_id, data).subscribe(files => {
        if(files.status == "success") {
          this.router.navigate(['/notice/reservationnotice/edit', this.reservationnoticedetail]);
        }else {
          alert("비밀번호를 확인해주세요");
        }
      },error => {
        alert('Server error');
      })
    }

  }
  editreplay() {
    let data = {
      userid: this.editreplayname,
      replaypwd: this.editreplaypassword,
      replaycontent: this.editreplaycontent
    }
    if(this.editreplaypassword == null || this.editreplayname == null || this.editreplaycontent == null) {
      alert("모든 항목을 채워주세요");
    }else {
      this.noticeauthservice.postinReservationNoticeReplayEdit(this.editreplayparams, data).subscribe(files => {
        if(files.status == "success") {
          this.router.navigate(['/notice/reservationnotice']);
          alert("댓글 수정을 완료하였습니다.");
        }
        else {
          alert("비밀번호를 확인해주세요");
        }
      }, error => {
        alert("서버에러");
      })
    }
    
  }
  deletepasswordCheck() {
    let data = {
      password: this.deletepassword
    }
    if(this.deletepassword == null) {
      alert("비밀번호를 입력해주세요");
    }else {
      this.noticeauthservice.postinReservationNoticeDeletePasswordCheck(this.reservationnoticedetail.reservation_notice_id, data).subscribe(files => {
        if(files.status == "success") {
          this.router.navigate(['/notice/reservationnotice']);
          alert("해당게시물 삭제를 완료하였습니다.");
        }
        else {
          alert("비밀번호를 확인해주세요");
        }
      }, error => {
        alert("서버에러");
      })
    }
  }

  deletereplayPassword(replay) {
    this.editreplayparams = replay.reservationnoticereplay_id;
  }
  deletereplay() {
    let data = {
      password: this.deletereplaypassword
    }
    if(this.deletereplaypassword == null) {
      alert("비밀번호를 입력해주세요");
    }else {
      this.noticeauthservice.deleteinReservationNoticeReplayDelete(this.editreplayparams, data).subscribe(files => {
        if(files.status == "success") {
          this.router.navigate(['/notice/reservationnotice']);
          alert("댓글 삭제를 완료하였습니다.");
        }else {
          alert("비밀번호를 확인해주세요");
        }
      },error => {
        alert("Server error");
      });
    }
  }
  
  
}