import { Component, OnInit } from '@angular/core';
import { ReservationAuthService } from "../shared/reservation.service";
import { Router } from "@angular/router";
import * as moment from "moment"; 

@Component({
  selector: 'mwl-demo-component',
  templateUrl: './reservationreal.component.html',
  styleUrls: ['./reservationreal.component.css']
})
export class ReservationrealComponent implements OnInit {

  days: Array<any>;
  serverdata: Array<any>;
  currentyear: number;
  currentmonth: number;
  startmonth: string;
  maxday: number;
  yearmonth: string;
  daysnumber= [];

  constructor(private reservationAuthService: ReservationAuthService, private router: Router) { 
  	this.currentyear = moment().year();
    this.currentmonth = moment().month()+1;
    this.getReservation(this.currentyear, this.currentmonth);

    
  }

  ngOnInit() {
    
  }
  abc() {
    
    for(let i=0; i<this.daysnumber.length; i++) {
      
      for(let j=0; j<this.serverdata.length; j++) {
        
        if(this.daysnumber[i].num == this.serverdata[j].reservation_day) {
          if(this.serverdata[j].reservation_room == "나무사이") {
            if(this.serverdata[j].reservation_status == false) {
              this.daysnumber[i].reservation1 = "예약대기";
            }
            else {
              this.daysnumber[i].reservation1 = "예약불가";
            }
            
          }
          else if(this.serverdata[j].reservation_room == "구름위에") {
            if(this.serverdata[j].reservation_status == false) {
              this.daysnumber[i].reservation2 = "예약대기";
            }
            else {
              this.daysnumber[i].reservation2 = "예약불가";
            }
          }
          else if(this.serverdata[j].reservation_room == "초원위에") {
            if(this.serverdata[j].reservation_status == false) {
              this.daysnumber[i].reservation3 = "예약대기";
            }
            else {
              this.daysnumber[i].reservation3 = "예약불가";
            }
          }
          else if(this.serverdata[j].reservation_room == "별빛가득") {
            if(this.serverdata[j].reservation_status == false) {
              this.daysnumber[i].reservation4 = "예약대기";
            }
            else {
              this.daysnumber[i].reservation4 = "예약불가";
            }
          }
          else if(this.serverdata[j].reservation_room == "새벽숲속") {
            if(this.serverdata[j].reservation_status == false) {
              this.daysnumber[i].reservation5 = "예약대기";
            }
            else {
              this.daysnumber[i].reservation5 = "예약불가";
            }
          }
        }
      }
    }
  }
  getReservation(year, month) {
    this.reservationAuthService.postinReservation(year, month).subscribe(files => {
      if(files.status == "success"){
        this.serverdata = files.data;
        this.days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일' ];
        moment.locale('ko');
        
        this.yearmonth = year+'-'+month;
        let today = new Date(year+'-'+month+'-1').getDay();
        this.maxday = moment(this.yearmonth, "YYYY-MM").daysInMonth();
        this.daysofday(today, this.maxday);
        this.abc();
      }else {
        alert('Server error');
      }
    }, error => {
      alert('error');
    });
  }
  buildArr(theArr: String[]): String[][]{
    var arrOfarr = [];
    for(var i = 0; i < theArr.length ; i+=7) {
        var row = [];

        for(var x = 0; x < 7; x++) {
          var value = theArr[i + x];
          if(value == undefined) {
            break;
          }
          row.push(value);
        }
        arrOfarr.push(row);
    }
     return arrOfarr;
  }
  prevmonth(month, year) {
    this.currentmonth = month;
    if(month == 0) {
      this.currentmonth = 12;
      this.currentyear = year-1;
    }
    this.getReservation(this.currentyear, this.currentmonth);
  }
  nextmonth(month, year) {
    this.currentmonth = month;
    if(month == 13) {
      this.currentmonth = 1;
      this.currentyear = year+1;
    }
    this.getReservation(this.currentyear, this.currentmonth);
  }
  daysofday(today, maxday) {
    this.daysnumber = [];
    for(let i=1; i<=maxday; i++) {
      if(today == 0){
        this.daysnumber[i-1] = {
            num: i,
            reservation1: "예약가능",
            reservation2: "예약가능",
            reservation3: "예약가능",
            reservation4: "예약가능",
            reservation5: "예약가능"
        };
      }
      else if(today == 1){
        if(i==1){
          this.daysnumber[0] = {num: ''};
          this.daysnumber[i] = {
            num: i,
            reservation1: "예약가능",
            reservation2: "예약가능",
            reservation3: "예약가능",
            reservation4: "예약가능",
            reservation5: "예약가능"
          };
        }
        this.daysnumber[i] = {
            num: i,
            reservation1: "예약가능",
            reservation2: "예약가능",
            reservation3: "예약가능",
            reservation4: "예약가능",
            reservation5: "예약가능"
        };
      }
      else if(today == 2){
        if(i==1){
          this.daysnumber[0] = {num: ''};
          this.daysnumber[1] = {num: ''};
          this.daysnumber[i+1] = { 
            num: i,
            reservation1: "예약가능",
            reservation2: "예약가능",
            reservation3: "예약가능",
            reservation4: "예약가능",
            reservation5: "예약가능"
          };
        }
        this.daysnumber[i+1] = {
            num: i,
            reservation1: "예약가능",
            reservation2: "예약가능",
            reservation3: "예약가능",
            reservation4: "예약가능",
            reservation5: "예약가능"
        };
      }
      else if(today == 3){
        if(i==1){
          this.daysnumber[0] = {num: ''};
          this.daysnumber[1] = {num: ''};
          this.daysnumber[2] = {num: ''};
          this.daysnumber[i+2] = {
            num: i,
            reservation1: "예약가능",
            reservation2: "예약가능",
            reservation3: "예약가능",
            reservation4: "예약가능",
            reservation5: "예약가능"
          };
        }
        this.daysnumber[i+2] = {
            num: i,
            reservation1: "예약가능",
            reservation2: "예약가능",
            reservation3: "예약가능",
            reservation4: "예약가능",
            reservation5: "예약가능"
        };
      }
      else if(today == 4){

        if(i==1){
          this.daysnumber[0] = {num: 0};
          this.daysnumber[1] = {num: 0};
          this.daysnumber[2] = {num: 0};
          this.daysnumber[3] = {num: 0};
          this.daysnumber[i+3] = {
            num: i,
            reservation1: "예약가능",
            reservation2: "예약가능",
            reservation3: "예약가능",
            reservation4: "예약가능",
            reservation5: "예약가능"
          };
        }
        this.daysnumber[i+3] = {
          num: i,
          reservation1: "예약가능",
          reservation2: "예약가능",
          reservation3: "예약가능",
          reservation4: "예약가능",
          reservation5: "예약가능"
        };

       
      }
      else if(today == 5){
        if(i==1){
          this.daysnumber[0] = {num:''};
          this.daysnumber[1] = {num:''};
          this.daysnumber[2] = {num:''};
          this.daysnumber[3] = {num:''};
          this.daysnumber[4] = {num:''};
          this.daysnumber[i+4] = {
            num: i,
            reservation1: "예약가능",
            reservation2: "예약가능",
            reservation3: "예약가능",
            reservation4: "예약가능",
            reservation5: "예약가능"
          };
        }
        this.daysnumber[i+4] = {
            num: i,
            reservation1: "예약가능",
            reservation2: "예약가능",
            reservation3: "예약가능",
            reservation4: "예약가능",
            reservation5: "예약가능"
        };
      }
      else if(today == 6){
        if(i==1){
          this.daysnumber[0] = {num: ''};
          this.daysnumber[1] = {num: ''};
          this.daysnumber[2] = {num: ''};
          this.daysnumber[3] = {num: ''};
          this.daysnumber[4] = {num: ''};
          this.daysnumber[5] = {num: ''};
          this.daysnumber[i+5] = {
            num: i,
            reservation1: "예약가능",
            reservation2: "예약가능",
            reservation3: "예약가능",
            reservation4: "예약가능",
            reservation5: "예약가능"
          };
        }
        this.daysnumber[i+5] = {
            num: i,
            reservation1: "예약가능",
            reservation2: "예약가능",
            reservation3: "예약가능",
            reservation4: "예약가능",
            reservation5: "예약가능"
        };
      }

      
    }
  }
  reservation1(item) {
    let data = {
      year: this.currentyear,
      month: this.currentmonth,
      day: item.num,
      roomname: "나무사이"
    }
    this.router.navigate(['/reservation/detail', data]);
  }
  reservation2(item) {
    let data = {
      year: this.currentyear,
      month: this.currentmonth,
      day: item.num,
      roomname: "구름위에"
    }
    this.router.navigate(['/reservation/detail', data]);
  }
  reservation3(item) {
    let data = {
      year: this.currentyear,
      month: this.currentmonth,
      day: item.num,
      roomname: "초원위에"
    }
    this.router.navigate(['/reservation/detail', data]);
  }
  reservation4(item) {
    let data = {
      year: this.currentyear,
      month: this.currentmonth,
      day: item.num,
      roomname: "별빛가득"
    }
    this.router.navigate(['/reservation/detail', data]);
  }
  reservation5(item) {
    let data = {
      year: this.currentyear,
      month: this.currentmonth,
      day: item.num,
      roomname: "새벽숲속"
    }
    this.router.navigate(['/reservation/detail', data]);
  }


}