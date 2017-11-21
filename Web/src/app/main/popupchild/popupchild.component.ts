import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MainAuthService } from '../shared/main.service';

@Component({
  selector: 'app-popupchild',
  templateUrl: './popupchild.component.html',
  styleUrls: ['./popupchild.component.css']
})
export class PopupchildComponent implements OnInit {

  showText:Boolean = false;
  visibilitySource:String = '';
  pensionimg: string;
  title: string;
  content: string;
  agree: number = 0;

  


  constructor(private appcomponent: AppComponent, private mainauthservice: MainAuthService) { 
    this.pensionimg = '../../../assets/img/pension/sanarae.png';
  }


  ngOnInit() {

    this.mainauthservice.getinPopup().subscribe(res => {
      if(res.status == "success") {
        if(res.data != null) {
          this.title = res.data.popup_title;
          this.content = res.data.popup_content;
        }else {
          this.title = "공지사항";
          this.content = "올라온 공지사항이 없습니다.";
        }
        
      }else {
        alert('Server error');
      }
    },error => {
      alert('Server error');
    })
  }

  onclose() {
    if(this.agree == 1){
      let expires = 3600;
      let date = new Date();
      let abc = Math.round((date.setSeconds(date.getSeconds()))/1000);
      let schedule = Math.round((date.setSeconds(date.getSeconds()+expires))/1000);

      localStorage.setItem("setTimeout", JSON.stringify(schedule));
      
      this.appcomponent.onclose();
    }else {
      this.appcomponent.onclose();
    }
  }
  todayagree() {
    if(this.agree == 0) {
      this.agree = 1;
    }
    else {
      this.agree = 0;
    }
  }

}