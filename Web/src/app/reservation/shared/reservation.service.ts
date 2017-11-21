import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http"; 
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReservationAuthService {
	
	constructor (private http: Http, private router: Router) {}

	private reservationUrl = 'http://52.78.32.175:3005/reservation/list';
	private reservationuserUrl = 'http://52.78.32.175:3005/reservation/user';
	

	postinReservation(year, month): Observable<any> {
		let data = {
			year: year,
			month: month,
		}
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		return this.http.post(this.reservationUrl, data, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	postinReservationUser(data): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		return this.http.post(this.reservationuserUrl, data, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
}