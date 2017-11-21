import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ReservationAuthService } from '../shared/reservation.service';
import * as moment from "moment"; 

@Component({
  selector: 'app-reservationdetail',
  templateUrl: './reservationdetail.component.html',
  styleUrls: ['./reservationdetail.component.css']
})
export class ReservationdetailComponent implements OnInit {

  private sub:Object;
  detailreservation: any;
  reservationday: string;
  viewroompay: number;
  viewroomname: string;
  viewperson: string;
  viewday: string;
  roompay: number;
  personselect: number;
  viewarrayperson = [];
  viewallroompay: string;
  allroompay: number;
  name: string;
  password: string;
  phone: string;
  content: string;
  buttonstatus = 0;



  constructor(private route: ActivatedRoute, private reservationAuthService: ReservationAuthService, private router: Router) { 
  	this.sub = this.route.params.subscribe(params => {
  		this.detailreservation = params;
  		
  		let day = new Date(this.detailreservation.year, this.detailreservation.month-1, this.detailreservation.day);
  		let dayWrapper = moment(day);
  		this.reservationday = dayWrapper.format("ddd");
  		this.reservationdata(this.detailreservation.roomname, this.detailreservation.month, this.detailreservation.day, this.reservationday);
  	});

  }

  reservationdata(room, month, day, daytext) {
  	this.viewroomname = room;
  	this.viewday = this.detailreservation.year + "-" + month + "-" + day;
  	if(room == "나무사이" || room == "구름위에") {
  		this.personselect = 2;
  		this.viewarrayperson[0] = 2;
  		this.viewarrayperson[1] = 3;
  		this.viewarrayperson[2] = 4;
  		this.viewperson = "2/4명"
	  	if(month == 7 || month == 8) {
  			this.viewroompay = 150;
  			this.viewallroompay = "150,000";
  			this.roompay = 150000;
  			this.allroompay = 150000;
	  	}
	  	else if(month == 12) {
	  		if(day == 24 || day == 31) {
	  			this.viewroompay = 150;
	  			this.viewallroompay = "150,000";
	  			this.roompay = 150000;
	  			this.allroompay = 150000;
	  		}
	  		else{
	  			if(daytext == "Fri" || daytext == "Sat") {
	  				this.viewroompay = 100;
	  				this.viewallroompay = "100,000";
	  				this.roompay = 100000;
	  				this.allroompay = 100000;
	  			}
	  			else {
	  				this.viewroompay = 80;
	  				this.viewallroompay = "80,000";
	  				this.roompay = 80000;
	  				this.allroompay = 80000;
	  			}
	  		}
	  	}
	  	else {
	  		if(daytext == "Fri" || daytext == "Sat") {
  				this.viewroompay = 100;
  				this.viewallroompay = "100,000";
  				this.roompay = 100000;
  				this.allroompay = 100000;
  			}
  			else {
  				this.viewroompay = 80;
  				this.viewallroompay = "80,000";
  				this.roompay = 80000;
  				this.allroompay = 80000;
  			}
	  	}
  	} 
  	else if(room == "초원위에" || room == "별빛가득") {
  		this.personselect = 4;
  		this.viewarrayperson[0] = 4;
  		this.viewarrayperson[1] = 5;
  		this.viewarrayperson[2] = 6;
  		this.viewperson = "4/6명"
  		if(month == 7 || month == 8) {
  			this.viewroompay = 200;
  			this.viewallroompay = "200,000";
  			this.roompay = 200000;
  			this.allroompay = 200000;
	  	}
	  	else if(month == 12) {
	  		if(day == 24 || day == 31) {
	  			this.viewroompay = 200;
	  			this.viewallroompay = "200,000";
	  			this.roompay = 200000;
	  			this.allroompay = 200000;
	  		}
	  		else{
	  			if(daytext == "Fri" || daytext == "Sat") {
	  				this.viewroompay = 150;
	  				this.viewallroompay = "150,000";
	  				this.roompay = 150000;
	  				this.allroompay = 150000;
	  			}
	  			else {
	  				this.viewroompay = 100;
	  				this.viewallroompay = "100,000";
	  				this.roompay = 100000;
	  				this.allroompay = 100000;
	  			}
	  		}
	  	}
	  	else {
	  		if(daytext == "Fri" || daytext == "Sat") {
  				this.viewroompay = 150;
  				this.viewallroompay = "150,000";
  				this.roompay = 150000;
  				this.allroompay = 150000;
  			}
  			else {
  				this.viewroompay = 100;
  				this.viewallroompay = "100,000";
  				this.roompay = 100000;
  				this.allroompay = 100000;
  			}
	  	}
  	}
  	else {
  		this.viewperson = "6/8명";
  		this.personselect = 6;
  		this.viewarrayperson[0] = 6;
  		this.viewarrayperson[1] = 7;
  		this.viewarrayperson[2] = 8;
  		if(month == 7 || month == 8) {
  			this.viewroompay = 300;
  			this.viewallroompay = "300,000";
  			this.roompay = 300000;
  			this.allroompay = 300000;
	  	}
	  	else if(month == 12) {
	  		if(day == 24 || day == 31) {
	  			this.viewroompay = 300;
	  			this.viewallroompay = "300,000";
	  			this.roompay = 300000;
	  			this.allroompay = 300000;
	  		}
	  		else{
	  			if(daytext == "Fri" || daytext == "Sat") {
	  				this.viewroompay = 230;
	  				this.viewallroompay = "230,000";
	  				this.roompay = 230000;
	  				this.allroompay = 230000;
	  			}
	  			else {
	  				this.viewroompay = 200;
	  				this.viewallroompay = "200,000";
	  				this.roompay = 200000;
	  				this.allroompay = 200000;
	  			}
	  		}
	  	}
	  	else {
	  		if(daytext == "Fri" || daytext == "Sat") {
  				this.viewroompay = 230;
  				this.viewallroompay = "230,000";
  				this.roompay = 230000;
  				this.allroompay = 230000;
  			}
  			else {
  				this.viewroompay = 200;
  				this.viewallroompay = "200,000";
  				this.roompay = 200000;
  				this.allroompay = 200000;
  			}
	  	}
  	}

  }

  ngOnInit() {
  
  }

  updateSelectedValue(event) {
  	if(event == 2) {
  		this.reservationdata(this.detailreservation.roomname, this.detailreservation.month, this.detailreservation.day, this.reservationday);
  	}
  	else if(event == 3) {
  		this.reservationdata(this.detailreservation.roomname, this.detailreservation.month, this.detailreservation.day, this.reservationday);
  		this.viewroompay = this.viewroompay + 10;
  		this.roompay = this.roompay + 10000;
  	}
  	else if(event == 4) {
  		if(this.detailreservation.roomname == "구름위에" || this.detailreservation.roomname == "나무사이"){
	  		this.reservationdata(this.detailreservation.roomname, this.detailreservation.month, this.detailreservation.day, this.reservationday);
	  		this.viewroompay = this.viewroompay + 20;
	  		this.roompay = this.roompay + 20000;
  		}else {
	  		this.reservationdata(this.detailreservation.roomname, this.detailreservation.month, this.detailreservation.day, this.reservationday);
  		}
  	}
  	else if(event == 5) {
  		this.reservationdata(this.detailreservation.roomname, this.detailreservation.month, this.detailreservation.day, this.reservationday);
  		this.viewroompay = this.viewroompay + 10;
  		this.roompay = this.roompay + 10000;
  	}
  	else if(event == 6) {
  		if(this.detailreservation.roomname == "초원위에" || this.detailreservation.roomname == "별빛가득"){
	  		this.reservationdata(this.detailreservation.roomname, this.detailreservation.month, this.detailreservation.day, this.reservationday);
	  		this.viewroompay = this.viewroompay + 20;
	  		this.roompay = this.roompay + 20000;
  		}else {
	  		this.reservationdata(this.detailreservation.roomname, this.detailreservation.month, this.detailreservation.day, this.reservationday);
  		}
  	}
  	else if(event == 7) {
  		this.reservationdata(this.detailreservation.roomname, this.detailreservation.month, this.detailreservation.day, this.reservationday);
  		this.viewroompay = this.viewroompay + 10;
  		this.roompay = this.roompay + 10000;
  	}
  	else {
  		this.reservationdata(this.detailreservation.roomname, this.detailreservation.month, this.detailreservation.day, this.reservationday);
  		this.viewroompay = this.viewroompay + 20;
  		this.roompay = this.roompay + 20000;
  	}
  }
  userinfoagree() {

    if(this.buttonstatus == 0) {
      this.buttonstatus = 1;
    }
    else {
      this.buttonstatus = 0;
    }
  }
  reservationsubmit() {
    if(this.name == null || this.password == null || this.phone == null || this.content == null) {
      alert("모든 항목을 채워주세요");
    }
    else if(this.buttonstatus == 0) {
      alert("개인정보처리방침에 동의해주세요");
    }
    else {
      let data = {
        username: this.name,
        userpwd: this.password,
        userphone: this.phone,
        usermemo: this.content,
        userperson: this.personselect,
        userpay: this.roompay,
        year: this.detailreservation.year,
        month: this.detailreservation.month,
        day: this.detailreservation.day,
        roomname: this.detailreservation.roomname
      }
      this.reservationAuthService.postinReservationUser(data).subscribe(files => {
        if(files.status == "success") {
          alert("예약이 완료되었습니다.");
          this.router.navigate(['/reservation/realtime']);
        }else {
          alert("잠시후 다시 시도해주세요");
        }
      },error => {  
        alert('Server error');
      })
    }
  }
}