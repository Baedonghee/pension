import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { tourRouting } from './tour.routing';
import { TourComponent } from "./tour.component";
import { Tour1Component } from "./tour1/tour1.component";
import { Tour2Component } from "./tour2/tour2.component";
import { Tour3Component } from "./tour3/tour3.component";
import { Tour4Component } from "./tour4/tour4.component";


@NgModule({
	declarations: [
		TourComponent,
		Tour1Component,
		Tour2Component,
		Tour3Component,
		Tour4Component
	],
	providers:[],
	imports: [
		tourRouting,
		CommonModule
	]
})
export class TourModule {}