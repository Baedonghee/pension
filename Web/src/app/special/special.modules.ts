import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { specialRouting } from "./special.routing";

import { SpecialComponent } from "./special.component";
import { FoodComponent } from "./food/food.component";
import { PickupComponent } from "./pickup/pickup.component";
import { SingroomComponent } from "./singroom/singroom.component";


@NgModule({
	declarations: [
		SpecialComponent,
		FoodComponent,
		PickupComponent,
		SingroomComponent
	],
	providers:[],
	imports: [
		specialRouting,
		CommonModule
	]
})
export class SpecialModule {}