import { Component, OnInit, ViewChild } from '@angular/core';

import { MainAuthService } from '../shared/main.service';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {


  @ViewChild('usermodal')


  usermodal: ModalComponent;
  reservationarray = [];
  datedata: string;
  year: number;
  month: number;
  day: number;
  showAll: number = 0;
  showSearch: number = 0;
  reservationSearcharray = [];
  username: string;
  userphone: string;
  usermemo: string;
  userpay: number;
  userperson: number;

  constructor(private mainauthservice: MainAuthService) { 

  }

  ngOnInit() {
  	this.mainauthservice.getinReservation().subscribe(res => {
  		if(res.status == "success") {
        this.showAll = 1;
  			this.reservationarray = res.data;
  		}else {
  			alert('Server error');
  		}
  	}, error => {
  		alert('Server error');
  	})
  }
  onUserinfo(reservation) {
    this.mainauthservice.getinReservationuser(reservation.reservation_usernum).subscribe(res => {
      if(res.status == 'success') {
        this.username = res.data.user_name;
        this.userphone = res.data.user_phone;
        this.usermemo = res.data.user_memo;
        this.userpay = res.data.user_pay;
        this.userperson = res.data.user_person;
      }
    }, error => {
      alert('Server error');
    })
  }

  onDelete(reservation) {
    this.mainauthservice.deleteinReservation(reservation.reservation_id).subscribe(res => {
      if(res.status == "success") {
        alert("삭제성공");
        for(let i=0; i<this.reservationarray.length; i++) {
          if(this.reservationarray[i].reservation_id == reservation.reservation_id) {
            this.reservationarray.splice(i,1);
          }
        }
        for(let i=0; i<this.reservationSearcharray.length; i++) {
          if(this.reservationSearcharray[i].reservation_id == reservation.reservation_id) {
            this.reservationSearcharray.splice(i,1);
          }
        }
      }else {
        alert('Server error');
      }
    }, error => {  
      alert('Server error');
    });
  }
  onDatepickerDateChange($event) {
    this.showAll = 0;
    this.showSearch = 1;
    this.reservationSearcharray = [];
    this.datedata = $event.value.format('l');
    let strArray = this.datedata.split('/');
    this.year = parseInt(strArray[2]);
    this.month = parseInt(strArray[0]);
    this.day = parseInt(strArray[1]);
    
    for(let i=0; i<this.reservationarray.length; i++) {
      if(this.reservationarray[i].reservation_year == this.year) {
        if(this.reservationarray[i].reservation_month == this.month) {
          if(this.reservationarray[i].reservation_day == this.day) {
            this.reservationSearcharray.push(this.reservationarray[i]);
          }
        }
      }
    }
  }
  allList() {
    this.showAll = 1;
    this.showSearch = 0;
  }
}