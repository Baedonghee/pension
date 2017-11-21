import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";


const APP_ROUTES: Routes =[
	{ path: '', redirectTo:'/home',pathMatch: 'full' },
	{ path: 'home', component: MainComponent },
	{ path: 'about', loadChildren: 'app/about/about.modules#AboutModule'},
	{ path: 'room', loadChildren: 'app/room/room.modules#RoomModule'},
	{ path: 'special', loadChildren: 'app/special/special.modules#SpecialModule'},
	{ path: 'reservation', loadChildren: 'app/reservation/reservation.modules#ReservationModule'},
	{ path: 'tour', loadChildren: 'app/tour/tour.modules#TourModule'},
	{ path: 'notice', loadChildren: 'app/notice/notice.modules#NoticeModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);