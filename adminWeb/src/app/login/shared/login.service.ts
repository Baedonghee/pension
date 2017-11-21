import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http"; 
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginAuthService {
	
	constructor (private http: Http, private router: Router) {}

	private loginUrl = 'http://52.78.32.175:3005/user/login';
	private abcUrl = 'http://dev.yassgo.com/yassgo/shop.do?param=ctgList';
	private exampleUrl = 'https://api.weibo.com/oauth2/authorize?client_id=854330854&redirect_uri=http://www.yassgo.com&response_type=code';
	private dongheeUrl = 'http://localhost:8080/usims/add';
	


	postinLogin(userdata): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		return this.http.post(this.loginUrl, userdata, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	postinLogin12(userdata): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		let abc = {
			serialNumber: 102301230,
			type: "NANO",
			phoneNumber: "010-3136-1111",
			status: 0
		}
		return this.http.post(this.dongheeUrl, abc, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	getinLogin(): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions( {headers: headers});
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('NATI_CD', "KR");
		urlSearchParams.append('MEM_ID', "yassgo");
		let body = urlSearchParams.toString();
		
		return this.http.post(this.abcUrl, body, options)
							 .map((res: Response) => {
							 	return console.log(res);
							 })
							 .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getinLogin1(): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
		let options = new RequestOptions( {headers: headers});
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('client_id', "854330854");
		urlSearchParams.append('redirect_uri', "http://www.yassgo.com");
		urlSearchParams.append('response_type', "code");

		let body = urlSearchParams.toString();

		return this.http.get(this.exampleUrl, options)
						 .map((res: Response) => {
						 		console.log(res);
						 })
						 .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
	
}