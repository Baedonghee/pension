import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { CalendarModule } from 'angular-calendar';
import { reservationRouting } from './reservation.routing';
import { ReservationComponent } from "./reservation.component";
import { ReservationinfoComponent } from "./reservationinfo/reservationinfo.component";
import { ReservationrealComponent } from "./reservationreal/reservationreal.component";
import { ReservationdetailComponent } from "./reservationdetail/reservationdetail.component";
import { ReservationAuthService } from "./shared/reservation.service";



@NgModule({
	declarations: [
		ReservationinfoComponent,
		ReservationrealComponent,
		ReservationComponent,
		ReservationdetailComponent
	],
	providers:[ReservationAuthService],
	imports: [
		reservationRouting,
		CommonModule,
		CalendarModule.forRoot(),
		HttpModule,
		FormsModule,
		JsonpModule
	]
})
export class ReservationModule {}