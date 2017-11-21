import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http"; 
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MainAuthService {
	
	constructor (private http: Http, private router: Router) {}

	private popupUrl = 'http://52.78.32.175:3005/popup';
	
	

	getinPopup(): Observable<any> {
		
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		return this.http.get(this.popupUrl, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	
}