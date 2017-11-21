import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about.component";
import { AddressComponent } from "./address/address.component";
import { IntroComponent } from "./intro/intro.component";
import { ViewComponent } from "./view/view.component";

export const ABOUT_ROUTES: Routes = [
	{ path : '',component: AboutComponent, children:[
		{ path : '', component: IntroComponent },
		{ path : 'address', component: AddressComponent },
		{ path : 'view', component: ViewComponent }
	]}
];

export const aboutRouting = RouterModule.forChild(ABOUT_ROUTES);