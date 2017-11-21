import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private router: Router) {
  	if(localStorage.getItem("username")!=null) {
      this.router.navigate(['/main']);
    }
    else if(localStorage.getItem("session")== "true"){
      alert("세션이 만료되었습니다. 로그인페이지로 돌아갑니다.");
      this.router.navigate(['/login']);
    }
  }
  ngOnInit():any {

  }


  
}
