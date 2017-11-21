import { Routes, RouterModule } from "@angular/router";

import { ReservationComponent } from "./reservation.component";
import { ReservationinfoComponent } from "./reservationinfo/reservationinfo.component";
import { ReservationrealComponent } from "./reservationreal/reservationreal.component";
import { ReservationdetailComponent } from "./reservationdetail/reservationdetail.component";


export const RESERVATION_ROUTES: Routes = [
	{ path : '',component: ReservationComponent, children:[
		{ path : '', component: ReservationinfoComponent },
		{ path : 'realtime', component: ReservationrealComponent },
		{ path : 'detail', component: ReservationdetailComponent}
	]}
];

export const reservationRouting = RouterModule.forChild(RESERVATION_ROUTES);