import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http"; 
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MainAuthService {
	
	constructor (private http: Http, private router: Router) {}

	private noticeUrl = 'http://52.78.32.175:3005/notice';
	private reservationUrl = 'http://52.78.32.175:3005/reservation/list';
	private reservationSelectUrl = 'http://52.78.32.175:3005/reservation';
	private reservationCheckUrl = 'http://52.78.32.175:3005/reservation/check';
	private reservationWaitingUrl = 'http://52.78.32.175:3005/reservation/waiting';
	private reservationUserUrl = 'http://52.78.32.175:3005/reservation/user';
	private reservationNoticeUrl = 'http://52.78.32.175:3005/reservationnotice';
	private popupUrl = 'http://52.78.32.175:3005/popup';

	getinNotice(): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});

		return this.http.get(this.noticeUrl, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}


	postinNotice(noticedata): Observable<any> {
		let body = {
			title: noticedata.title,
			content: noticedata.content,
			userid: localStorage.getItem("username")
		}
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		return this.http.post(this.noticeUrl, body, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	putinNotice(boardnum, noticedata): Observable<any> {
		let body = {
			title: noticedata.title,
			content: noticedata.content
		}
		let editnoticeUrl = this.noticeUrl + '/' + boardnum;
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});

		return this.http.put(editnoticeUrl, body, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
	deleteinNotice(boardnum): Observable<any> {
		let deletenoticeUrl = this.noticeUrl + '/' + boardnum;
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});

		return this.http.delete(deletenoticeUrl, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
	getinReservation(): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});

		return this.http.get(this.reservationUrl, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
	postinReservationCheck(body): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});

		return this.http.post(this.reservationCheckUrl, body, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error: any) => Observable.throw(error.json().error || 'Server error'));

	}
	postinReservation(body): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});

		return this.http.post(this.reservationSelectUrl, body, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
	deleteinReservation(params): Observable<any> {
		let deletereservationUrl = this.reservationSelectUrl + '/' + params;
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});

		return this.http.delete(deletereservationUrl, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
	getinReservationwaiting():Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});

		return this.http.get(this.reservationWaitingUrl, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
	postinReservationwaiting(params): Observable<any> {
		let body = {
			status: true
		}
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		let reservationstatusUrl = this.reservationWaitingUrl + '/' + params;

		return this.http.post(reservationstatusUrl, body, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
	putinReservationwaiting(params, body): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		let reservationdeleteUrl = this.reservationWaitingUrl + '/' + params;

		return this.http.put(reservationdeleteUrl, body, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
	getinReservationuser(params): Observable<any> {
		let reservationuserinfoUrl = this.reservationUserUrl + '/' + params;
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});

		return this.http.get(reservationuserinfoUrl, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
	getinReservationnotice(): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});

		return this.http.get(this.reservationNoticeUrl, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
	deleteinReservationnotice(params): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});
		let reservationNoticedeleteUrl = this.reservationNoticeUrl + '/' + params;

		return this.http.delete(reservationNoticedeleteUrl, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
	postinPopup(popupdata): Observable<any> {
		let body = {
			title: popupdata.title,
			content: popupdata.content
		}
		let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
		let options = new RequestOptions( {headers: headers});

		return this.http.post(this.popupUrl, body, options)
						.map((res: Response) => {
							return res.json();
						})
						.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}






}