import { Routes, RouterModule } from "@angular/router";

import { NoticeComponent } from "./notice.component";
import { NoticedetailComponent } from "./noticedetail/noticedetail.component";
import { NoticeinfoComponent } from "./noticeinfo/noticeinfo.component";
import { ReservationnoticeComponent } from "./reservationnotice/reservationnotice.component";
import { ReservationnoticedetailComponent } from "./reservationnoticedetail/reservationnoticedetail.component";
import { ReservationnoticeaddComponent } from "./reservationnoticeadd/reservationnoticeadd.component"; 
import { ReservationnoticeeditComponent } from "./reservationnoticeedit/reservationnoticeedit.component";

export const NOTICE_ROUTES: Routes = [
	{ path : '',component: NoticeComponent, children:[
		{ path : '', component: NoticeinfoComponent },
		{ path : 'detail', component: NoticedetailComponent },
		{ path : 'reservationnotice', component: ReservationnoticeComponent},
		{ path : 'reservationnotice/detail/:id', component: ReservationnoticedetailComponent},
		{ path : 'reservationnotice/add', component: ReservationnoticeaddComponent},
		{ path : 'reservationnotice/edit', component: ReservationnoticeeditComponent}
	]}
];

export const noticeRouting = RouterModule.forChild(NOTICE_ROUTES);