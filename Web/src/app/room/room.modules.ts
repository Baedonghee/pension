import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { roomRouting } from "./room.routing";
import { RoomrouterComponent } from "./roomrouter.component";
import { RoomComponent } from "./room.component";
import { Room1Component } from "./room1/room1.component";
import { Room2Component } from "./room2/room2.component";
import { Room3Component } from "./room3/room3.component";
import { Room4Component } from "./room4/room4.component";
import { Room5Component } from "./room5/room5.component";



@NgModule({
	declarations: [
		RoomComponent,
		Room1Component,
		Room2Component,
		Room3Component,
		Room4Component,
		Room5Component,
		RoomrouterComponent
	],
	providers:[],
	imports: [
		roomRouting,
		CommonModule
	]
})
export class RoomModule {}