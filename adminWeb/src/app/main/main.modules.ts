import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpModule,JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { IcDatepickerModule } from 'ic-datepicker';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { MainComponent } from './main.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { NoticeComponent } from './notice/notice.component';
import { NoticeaddComponent } from './noticeadd/noticeadd.component';
import { NoticeeditComponent } from './noticeedit/noticeedit.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationaddComponent } from './reservationadd/reservationadd.component';
import { ReservationwaitingComponent } from './reservationwaiting/reservationwaiting.component';
import { ReservationnoticeComponent } from './reservationnotice/reservationnotice.component';
import { PopupComponent } from './popup/popup.component';

import { mainRouting } from './main.routing';
import { MainAuthService } from './shared/main.service'; 

@NgModule({
	declarations: [
		MainComponent,
		BodyComponent,
		HeaderComponent,
		NoticeComponent,
		NoticeaddComponent,
		NoticeeditComponent,
		ReservationComponent,
		ReservationaddComponent,
		ReservationwaitingComponent,
		ReservationnoticeComponent,
		PopupComponent
	],
	providers:[MainAuthService],
	imports: [
		CommonModule,
		HttpModule,
		JsonpModule,
		FormsModule,
		mainRouting,
		ReactiveFormsModule,
		IcDatepickerModule,
		NgxPaginationModule,
		Ng2Bs3ModalModule
	]
})
export class MainModule {}