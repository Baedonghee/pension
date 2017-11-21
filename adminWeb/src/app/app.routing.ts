import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes =[
	{ path: '', redirectTo:'/login' ,pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'main', loadChildren: 'app/main/main.modules#MainModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);