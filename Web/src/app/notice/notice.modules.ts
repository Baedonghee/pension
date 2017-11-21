import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpModule,JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { NgxPaginationModule } from 'ngx-pagination';


import { noticeRouting } from './notice.routing';
import { NoticeComponent } from "./notice.component";
import { NoticedetailComponent } from "./noticedetail/noticedetail.component";
import { NoticeinfoComponent } from "./noticeinfo/noticeinfo.component";
import { NoticeAuthService } from "./shared/notice.service";
import { ReservationnoticeComponent } from "./reservationnotice/reservationnotice.component";
import { ReservationnoticedetailComponent } from "./reservationnoticedetail/reservationnoticedetail.component";
import { ReservationnoticeaddComponent } from "./reservationnoticeadd/reservationnoticeadd.component"; 
import { ReservationnoticeeditComponent } from "./reservationnoticeedit/reservationnoticeedit.component";

@NgModule({
	declarations: [
		NoticeComponent,
		NoticedetailComponent,
		NoticeinfoComponent,
		ReservationnoticeComponent,
		ReservationnoticedetailComponent,
		ReservationnoticeaddComponent,
		ReservationnoticeeditComponent
	],
	providers:[NoticeAuthService],
	imports: [
		noticeRouting,
		CommonModule,
		HttpModule,
		JsonpModule,
		Ng2Bs3ModalModule,
		FormsModule,
		NgxPaginationModule
	]
})
export class NoticeModule {}