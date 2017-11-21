import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticedetail',
  templateUrl: './noticedetail.component.html',
  styleUrls: ['./noticedetail.component.css']
})
export class NoticedetailComponent implements OnInit {

  private sub:Object;
  noticedetail: any;
  
  constructor(private route: ActivatedRoute) { 
  	this.sub = this.route.params.subscribe(params => {
  		this.noticedetail = params;
  	});
  }

  ngOnInit() {
  
  }

}