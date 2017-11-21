import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { MainAuthService } from '../shared/main.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private mainauthservice: MainAuthService, private router: Router) { 

  }

  ngOnInit() {
  	this.myForm = this.fb.group({
  		title: ['', Validators.required],
  		content: ['', Validators.required]
  	});
  }

  public onNotice() {
  	this.mainauthservice.postinPopup(this.myForm.value).subscribe(res => {
  		if(res.status == "success"){
  			alert('팝업메뉴가 등록되었습니다.')
  			this.router.navigate(['/main']);
  		}
  		else{
  			alert('Server error');
  		}
  	}, error => {
  		alert('Notice add error');
  	})
  }

}
