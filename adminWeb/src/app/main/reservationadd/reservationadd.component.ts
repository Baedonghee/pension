import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { MainAuthService } from '../shared/main.service';
@Component({
  selector: 'app-reservationadd',
  templateUrl: './reservationadd.component.html',
  styleUrls: ['./reservationadd.component.css']
})
export class ReservationaddComponent implements OnInit {

  datedata: string;
  year: number;
  month: number;
  day: number;
  roomlist = [];
  roomselect: string;
  nameselect: string;
  phoneselect: string;
  payselect: number;
  personselect: number;
  memoselect: string;
  personarray = [2,3,4,5,6,7,8];
  constructor(private mainauthservice: MainAuthService, private router: Router) { 
    this.personselect = 2;
  }

  ngOnInit() {
  
  }

  onDatepickerDateChange($event) {
  	this.datedata = $event.value.format('l');
  	let strArray = this.datedata.split('/');
  	this.year = parseInt(strArray[2]);
  	this.month = parseInt(strArray[0]);
  	this.day = parseInt(strArray[1]);
  	let body = {
  		year: this.year,
  		month: this.month,
  		day: this.day
  	}
  	this.mainauthservice.postinReservationCheck(body).subscribe(res => {
  		if(res.status == "success") {
  			this.roomlist = [];
  			if(res.data.length == 0) {
  				let data = {
  					name: "예약가능한방이 없습니다"
  				}
  				this.roomlist.push(data);
  			}else {
  				for(let i=0; i<res.data.length; i++) {
	  				let data = {
	  					name: res.data[i]
	  				}
  					this.roomlist.push(data);
  				}
  			}
  			this.updateSelectedValue(this.roomlist[0].name);
  		}else {
  			alert('Server error');
  		}
  	}, error => {
  		alert('Server error');
  	});


  	
  }
  reservationwrite() {
  	if(this.year == null || this.month == null || this.day == null || this.roomselect == '예약가능한방이 없습니다' || this.nameselect == null) {
  		alert("양식에 맞게 적어주세요");
  	}
  	else {
  		let body = {
  			year: this.year,
  			month: this.month,
  			day: this.day,
  			roomname: this.roomselect,
  			username: this.nameselect,
        userpwd: 111,
        userphone: this.phoneselect,
        usermemo: this.memoselect,
        userperson: this.personselect,
        userpay: this.payselect
  		}
  		this.mainauthservice.postinReservation(body).subscribe(res => {
  			if(res.status == "success") {
  				this.router.navigate(['/main/reservation']);
  			} else {
  				alert('Server error');
  			}
  		}, error => {	
  			alert("Server error");
  		});
  	}
  }

  updateSelectedValue(event) {
  	this.roomselect = event;  
  }
  updateSelectedpersonValue(event) {
    this.personselect = event;
  }
}