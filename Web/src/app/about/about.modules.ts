import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { aboutRouting } from "./about.routes";
import { AboutComponent } from "./about.component";
import { AddressComponent } from "./address/address.component";
import { IntroComponent } from "./intro/intro.component";
import { ViewComponent } from "./view/view.component";
import { GalleryComponent } from "./view/gallery.component";


@NgModule({
	declarations: [
		AboutComponent,
		AddressComponent,
		IntroComponent,
		ViewComponent,
		GalleryComponent
	],
	providers:[],
	imports: [
		aboutRouting,
		CommonModule,
		AgmCoreModule.forRoot({
	      
	    })	
	]
})
export class AboutModule {}