import { Routes, RouterModule } from "@angular/router";

import { TourComponent } from "./tour.component";
import { Tour1Component } from "./tour1/tour1.component";
import { Tour2Component } from "./tour2/tour2.component";
import { Tour3Component } from "./tour3/tour3.component";
import { Tour4Component } from "./tour4/tour4.component";

export const TOUR_ROUTES: Routes = [
	{ path : '',component: TourComponent, children:[
		{ path : '', component: Tour1Component },
		{ path : 'tour2', component: Tour2Component },
		{ path : 'tour3', component: Tour3Component },
		{ path : 'tour4', component: Tour4Component }
	]}
];

export const tourRouting = RouterModule.forChild(TOUR_ROUTES);