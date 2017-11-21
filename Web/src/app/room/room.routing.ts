import { Routes, RouterModule } from "@angular/router";

import { RoomrouterComponent } from "./roomrouter.component";
import { RoomComponent } from "./room.component";
import { Room1Component } from "./room1/room1.component";
import { Room2Component } from "./room2/room2.component";
import { Room3Component } from "./room3/room3.component";
import { Room4Component } from "./room4/room4.component";
import { Room5Component } from "./room5/room5.component";

export const ROOM_ROUTES: Routes = [
	{ path : '',component: RoomrouterComponent, children:[
		{ path : '', component: RoomComponent },
		{ path : 'detailroom1', component: Room1Component },
		{ path : 'detailroom2', component: Room2Component },
		{ path : 'detailroom3', component: Room3Component },
		{ path : 'detailroom4', component: Room4Component },
		{ path : 'detailroom5', component: Room5Component }
	]}
];

export const roomRouting = RouterModule.forChild(ROOM_ROUTES);