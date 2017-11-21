import { Routes, RouterModule } from "@angular/router";

import { SpecialComponent } from "./special.component";
import { FoodComponent } from "./food/food.component";
import { PickupComponent } from "./pickup/pickup.component";
import { SingroomComponent } from "./singroom/singroom.component";


export const SPECIAL_ROUTES: Routes = [
	{ path : '',component: SpecialComponent, children:[
		{ path : '', component: FoodComponent },
		{ path : 'pickup', component: PickupComponent },
		{ path : 'singroom', component: SingroomComponent }
	]}
];

export const specialRouting = RouterModule.forChild(SPECIAL_ROUTES);