import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from './main.component';
import { BodyComponent } from './body/body.component';
import { NoticeComponent } from './notice/notice.component';
import { NoticeaddComponent } from './noticeadd/noticeadd.component';
import { NoticeeditComponent } from './noticeedit/noticeedit.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationaddComponent } from './reservationadd/reservationadd.component';
import { ReservationwaitingComponent } from './reservationwaiting/reservationwaiting.component';
import { ReservationnoticeComponent } from './reservationnotice/reservationnotice.component';
import { PopupComponent } from './popup/popup.component';

export const MAIN_ROUTES: Routes = [
	{ path : '',component: MainComponent, children:[
		{ path : '', component: BodyComponent },
		{ path : 'notice', component: NoticeComponent},
		{ path : 'notice/add', component: NoticeaddComponent},
		{ path : 'notice/edit', component: NoticeeditComponent},
		{ path : 'reservation', component: ReservationComponent},
		{ path : 'reservation/add', component: ReservationaddComponent},
		{ path : 'reservation/waiting', component: ReservationwaitingComponent },
		{ path : 'reservation/notice', component: ReservationnoticeComponent },
		{ path : 'popup', component: PopupComponent }
	]}
];

export const mainRouting = RouterModule.forChild(MAIN_ROUTES);