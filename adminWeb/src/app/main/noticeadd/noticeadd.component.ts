import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { MainAuthService } from '../shared/main.service';

@Component({
  selector: 'app-noticeadd',
  templateUrl: './noticeadd.component.html',
  styleUrls: ['./noticeadd.component.css']
})
export class NoticeaddComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private mainauthservice: MainAuthService, private router: Router) { }

  ngOnInit():any {
  	this.myForm = this.fb.group({
  		title: ['', Validators.required],
  		content: ['', Validators.required]
  	});
  }

  public onNotice() {
  	this.mainauthservice.postinNotice(this.myForm.value).subscribe(res => {
  		if(res.status == "success"){
  			this.router.navigate(['/main/notice']);
  		}
  		else{
  			alert('Server error');
  		}
  	}, error => {
  		alert('Notice add error');
  	})
  }

}