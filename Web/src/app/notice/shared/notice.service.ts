import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http"; 
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NoticeAuthService {
	
	constructor (private http: Http, private router: Router) {}

	private noticelistUrl = 'http://52.78.32.175:3005/notice';
	private reservationUrl = 'http://52.78.32.175:3005/reservationnotice';
	private reservationreplayUrl = 'http://52.78.32.175:3005/reservationnoticereplay'
	

	getinNotice(): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		return this.http.get(this.noticelistUrl, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	postinNoice(num): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		let noticeCountUrl =  this.noticelistUrl + '/' + num;
		return this.http.post(noticeCountUrl, options)
		 				.map((res: Response) => {
		 					return res.json();
		 				})
		 				.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getinReservationNotice(): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		return this.http.get(this.reservationUrl, options)
		 			    .map((res: Response) => {
		 			    	return res.json();
		 			    })
		 			    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getinReservationNoticeDetail(params): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		let reservationDetailUrl = this.reservationUrl+'/'+params;

		return this.http.get(reservationDetailUrl, options)
		 				.map((res: Response) => {
		 					return res.json();
		 				})
		 				.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	postinReservationNotice(body): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});

		return this.http.post(this.reservationUrl, body, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
						
	}
	postinReservationNoticeReplay(params, body): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		let reservationReplayaddUrl = this.reservationUrl+'/'+params;

		return this.http.post(reservationReplayaddUrl, body, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	postinReservationNoticeEditPasswordCheck(params, body): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		let reservationpasswordCheckUrl = this.reservationUrl+'/'+params+'/editpassword';

		return this.http.post(reservationpasswordCheckUrl, body, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
						
	}
	postinReservationNoticeDeletePasswordCheck(params, body): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		let reservationpasswordCheckUrl = this.reservationUrl+'/'+params+'/deletepassword';

		return this.http.post(reservationpasswordCheckUrl, body, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
						
	}
	postinReservationNoticeReplayEdit(params, body): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		let reservationreplaypasswordCheckUrl = this.reservationreplayUrl+'/'+params;

		return this.http.put(reservationreplaypasswordCheckUrl, body, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	putinReservationNotice(params, body): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		let reservationeditUrl = this.reservationUrl+'/'+params

		return this.http.put(reservationeditUrl, body, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	deleteinReservationNoticeReplayDelete(params, body): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		let reservationreplaydeleteUrl = this.reservationreplayUrl+'/'+params+'/deletereplay';

		return this.http.post(reservationreplaydeleteUrl, body, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
	
}