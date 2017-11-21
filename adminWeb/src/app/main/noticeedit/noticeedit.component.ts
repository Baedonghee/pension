import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router'

import { MainAuthService } from '../shared/main.service';

@Component({
  selector: 'app-noticeedit',
  templateUrl: './noticeedit.component.html',
  styleUrls: ['./noticeedit.component.css']
})
export class NoticeeditComponent implements OnInit {

  private sub:Object;
  myForm: FormGroup;
  editnotice: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private mainauthservice: MainAuthService, private router: Router) { 
  	this.sub = this.route.params.subscribe(params => {
  		this.editnotice = params;
  	})
  }

  ngOnInit() {
  	this.myForm = this.fb.group({
  		title: [this.editnotice.notice_title, Validators.required],
  		content: [this.editnotice.notice_content, Validators.required]
  	});
  }
  onNotice() {
  	this.mainauthservice.putinNotice(this.editnotice.notice_id, this.myForm.value).subscribe(res => {
  		if(res.status == "success") {
  			alert('수정이 완료 되었습니다.');
  			this.router.navigate(['/main/notice']);

  		}else {
  			alert('Server error');
  		}
  	}, error => {
  		alert('Server error');
  	})
  }

}