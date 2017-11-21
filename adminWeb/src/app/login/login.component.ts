import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { LoginAuthService } from './shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;	

  constructor(private fb: FormBuilder, private loginauthservice: LoginAuthService, private router: Router) { }

  ngOnInit():any {
    if(localStorage.getItem("username")!=null) {
      this.router.navigate(['/main']);
    }
    else if(localStorage.getItem("session")== "true"){
      alert("세션이 만료되었습니다. 로그인페이지로 돌아갑니다.");
    }
  	this.myForm = this.fb.group({
  		userid: ['', Validators.required],
  		userpwd: ['', Validators.required]
  	});
  }
  

  public onLogin() {
  	this.loginauthservice.postinLogin12(this.myForm.value).subscribe(res => {
  		if(res.status == "success") {
        localStorage.clear();
  			localStorage.setItem("username", this.myForm.value.userid);
        
  			this.router.navigate(['/main']);
  		}
  		else {
  			alert('아이디 및 비밀번호를 확인해주세요');
  		}
  	}, error => {
  		alert('login error');
  	});
  }

  public onabc() {
    this.router.navigate(['/main']);
  }
}
