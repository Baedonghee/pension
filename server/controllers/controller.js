const db = require('../utils/postgresql');
const moment = require('moment');
moment.locale("ko");

exports.reservationpost = async function(req, res, next) {
	try {
		let data = {
			year: parseInt(req.body.year),
			month: parseInt(req.body.month),
			day: parseInt(req.body.day),
			roomname: req.body.roomname,
			username: req.body.username
		};
		let reservation = await db.none('insert into reservation(reservation_year, reservation_month, reservation_day, reservation_room, reservation_username)'+
								 'values(${year}, ${month}, ${day}, ${roomname}, ${username})', data);
		res.status(200)
		   .json({
		   		status: 'success',
		   		message: 'reservation post sucess'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationadminlist = async function(req, res, next) {
	try {
		let reservation = await db.any(`SELECT reservation.reservation_id, reservation.reservation_year, reservation.reservation_month, reservation.reservation_day, reservation.reservation_room, reservation.reservation_status, reservation.reservation_usernum, reservationuser.user_name FROM reservation
										LEFT JOIN reservationuser ON reservation.reservation_usernum = reservationuser.user_num
										WHERE reservation_status = true ORDER BY reservation_year DESC, reservation_month DESC, reservation_day DESC`);
		res.status(200)
		   .json({
		   		status: 'success',
		   		data: reservation,
		   		message: 'reservation admin get success'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationadminwaitinglist = async function(req, res, next) {
	try {
		let reservationwaiting = await db.any(`SELECT reservation.reservation_id, reservation.reservation_year, reservation.reservation_month, reservation.reservation_day, reservation.reservation_room, reservation.reservation_status, reservation.reservation_usernum, reservationuser.user_name FROM reservation
											   LEFT JOIN reservationuser ON reservation.reservation_usernum = reservationuser.user_num
										  	   WHERE reservation_status = false ORDER BY reservation_year DESC, reservation_month DESC, reservation_day DESC`);
		res.status(200)
		   .json({
		   		status: 'success',
		   		data: reservationwaiting,
		   		message: 'reservationwaiting admin get success'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationadminwaitingok = async function(req, res, next) {
	try {
		let data = {
			status: req.body.status,
			reservationid: parseInt(req.params.boardid)
		}
		let reservationedit = await db.none('UPDATE reservation SET reservation_status = ${status} WHERE reservation_id = ${reservationid}', data);

		res.status(200)
		   .json({
		   		status: 'success',
		   		message: 'reservation update success'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationadminwaitingcancel = async function(req, res, next) {
	try {
		let reservationdelete = await db.none('DELETE FROM reservation WHERE reservation_id= $1', parseInt(req.params.boardid));

		let reservationuserdelete = await db.none('DELETE FROM reservationuser WHERE user_num = $1', parseInt(req.body.userid));

		res.status(200)
		   .json({
		   		status: 'success',
		   		message: 'reservation delete success'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationadminuserinfo = async function(req, res, next) {
	try {
		let reservationuserinfo = await db.one('SELECT * FROM reservationuser WHERE user_num = $1', parseInt(req.params.userid));

		res.status(200)
		   .json({
		   		status: 'success',
		   		data: reservationuserinfo,
		   		message: 'reservation user info success'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationlist = async function(req, res, next) {
	try {
		let data = {
			year: req.body.year,
			month: req.body.month
		}
		let reservation = await db.any('SELECT * FROM reservation WHERE reservation_year = ${year} AND reservation_month = ${month}',data);
		
		res.status(200)
		   .json({
		   		status: 'success',
		   		data: reservation,
		   		message: 'reservation get sucess'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationdelete = async function(req, res, next) {
	try {
		let reservationdelete = await db.none('DELETE FROM reservation WHERE reservation_id= $1', parseInt(req.params.boardid));
		
		res.status(200)
		   .json({
		   		status: 'success',
		   		message: 'reservation delete success'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationlistcheck = async function(req, res, next) {
	try {
		let data = {
			year: req.body.year,
			month: req.body.month,
			day: req.body.day
		}
		let roomlist = ["나무사이", "구름위에", "초원위에", "별빛가득", "새벽숲속"];
		let reservation = await db.any('SELECT * FROM reservation WHERE reservation_year = ${year} AND reservation_month = ${month} AND reservation_day = ${day}',data);
		if(reservation == 0) {
			
		}
		else {
			for(let i=0; i<reservation.length; i++) {
				if(reservation[i].reservation_room == "나무사이"){
					roomlist.splice(0,1);
				}
				else if(reservation[i].reservation_room == "구름위에"){
					roomlist.splice(1,1);
				}
				else if(reservation[i].reservation_room == "초원위에"){
					roomlist.splice(2,1);
				}
				else if(reservation[i].reservation_room == "별빛가득"){
					roomlist.splice(3,1);
				}
				else {
					roomlist.splice(4,1);
				}
			}
		}

		res.status(200)
		   .json({
		   		status: 'success',
		   		data: roomlist,
		   		message: 'reservation get sucess'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.useradd = async function(req, res, next) {
	try {
		let data = {
			userid: req.body.userid,
			userpwd: req.body.userpwd
		}
		let useradd = await db.none('insert into adminuser(user_id, user_pwd)'+
									'values(${userid}, ${userpwd})', data);
		res.status(200)
		   .json({
		   		status: 'success',
		   		message: 'useradd success'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.userlogin = async function(req, res, next) {
	try {
		let userlogin = await db.any('SELECT * FROM adminuser WHERE user_id = $1', req.body.userid);
		if(userlogin == 0) {
			res.status(200)
			   .json({
			   		status: 'fail',
			   		message: 'not data'
			   });
		}
		else {
			if(userlogin[0].user_pwd == req.body.userpwd){
				res.status(200)
				   .json({
				   		status:'success',
				   		message: 'login success'
				   });
			}else {
				res.status(200)
				   .json({
				   		status: 'success',
				   		message: 'pwd not equal'
				   });
			}
		}
	}catch(e) {
		res.json(e.message);
	}
}

exports.noticelist = async function(req, res, next) {
	try {
		let noticelist = await db.any(`SELECT notice.notice_id, notice.notice_title, notice_content, adminuser.user_id, notice.notice_date, notice.notice_count FROM notice
									   LEFT JOIN adminuser ON notice.notice_user = adminuser.user_num
									   ORDER BY notice.notice_date ASC`);
		res.status(200)
		   .json({
		   		status: 'success',
		   		data: noticelist,
		   		message: 'noticelist success'
		   })
	}catch(e) {	
		res.json(e.message);
	}
}
exports.noticeadd = async function(req, res, next) {
	try {
		let users = await db.one('select * from adminuser where user_id = $1', req.body.userid);
		
		let data = {
			title: req.body.title,
			content: req.body.content,
			userid: users.user_num,
			date: new moment().format("YYYY-MM-DD HH:mm:ss")
		}
		let noticeadd = await db.none('insert into notice(notice_title, notice_user, notice_content, notice_date)'+
									  'values(${title}, ${userid}, ${content}, ${date})', data);
		res.status(200)
		   .json({
		   		status: 'success',
		   		message: 'notice add sucess'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.noticeedit = async function(req, res, next) {
	try {
		let data = {
			noticeid: parseInt(req.params.boardid),
			title: req.body.title,
			content: req.body.content,
			date: new moment().format("YYYY-MM-DD HH:mm:ss")
		}
		let noticeedit = await db.none('UPDATE notice SET notice_title = ${title}, notice_content = ${content}, notice_date = ${date} WHERE notice_id = ${noticeid}', data);
		res.status(200)
		   .json({
		   		status: 'success',
		   		message: 'notice edit sucess'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.noticedelete = async function(req, res, next) {
	try {
		let reservationnoticedelete = await db.none('DELETE FROM notice WHERE notice_id= $1', parseInt(req.params.boardid));

		res.status(200)
		   .json({
		   		status: 'success',
		   		message: 'notice delete sucess'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.noticedetail = async function(req, res, next) {
	try {
		let reservationcount = await db.none(`UPDATE notice SET notice_count = notice_count +1 
											  WHERE notice_id = $1`, parseInt(req.params.boardid));
		res.status(200)
		   .json({
		   		status: 'success',
		   		message: 'counting success'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationnoticelist = async function(req, res, next) {
	try {
		moment.locale("ko");
		let reservationnoticelist = await db.any(`SELECT reservationnotice_id, reservationnotice_userid, reservationnotice_noticetitle, reservationnotice_noticecount, reservationnotice_noticecontent, reservationnotice_noticedate
												  FROM reservationnotice ORDER BY reservationnotice_noticedate ASC`);
		
		res.status(200)
		   .json({
		   		status: 'success',
		   		data: reservationnoticelist,
		   		message: 'reservationnotice list'
		   });
	}catch(e) {
		res.json(e.message);
	}
}

exports.reservationnoticedetail = async function(req, res, next) {
	try {
		let reservationcount = await db.none(`UPDATE reservationnotice SET reservationnotice_noticecount = reservationnotice_noticecount +1 
											  WHERE reservationnotice_id = $1`, parseInt(req.params.boardid));
		let reservationnoticedetail = await db.one(`SELECT reservationnotice_id, reservationnotice_userid, reservationnotice_noticetitle, reservationnotice_noticecontent, reservationnotice_noticecount, reservationnotice_noticedate 
													FROM reservationnotice WHERE reservationnotice_id = $1`, parseInt(req.params.boardid));
		let reservationnoticereplay = await db.any(`SELECT reservationnoticereplay_id, reservationnoticereplay_userid, reservationnoticereplay_content, reservationnoticereplay_date
													FROM reservationnoticereplay WHERE reservationnotice_id = $1`, parseInt(req.params.boardid));
		reservationnoticedetail.reservationreplay = reservationnoticereplay;

		res.status(200)
		   .json({
		   		status: 'success',
		   		data: reservationnoticedetail,
		   		message: 'detailBoard success'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationnoticeadd = async function(req, res, next) { 
	try {
		let data = {
			userid: req.body.userid,
			noticepwd: req.body.noticepwd,
			noticetitle: req.body.noticetitle,
			noticecontent: req.body.noticecontent,
			noticedate: new moment().format("YYYY-MM-DD HH:mm:ss")
		}
		let reservationnotice = await db.none('insert into reservationnotice(reservationnotice_userid, reservationnotice_noticepwd, reservationnotice_noticetitle, reservationnotice_noticecontent, reservationnotice_noticedate)'+
											  'values(${userid}, ${noticepwd}, ${noticetitle}, ${noticecontent}, ${noticedate})', data);
		res.status(200)
		   .json({
		   		status: 'success',
		   		message: 'reservationnotice add success'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationnoticeedit = async function(req, res, next) {
	try {
		let data = {
			userid: req.body.userid,
			noticepwd: req.body.noticepwd,
			noticetitle: req.body.noticetitle,
			noticecontent: req.body.noticecontent,
			noticedate: new moment().format("YYYY-MM-DD HH:mm:ss"),
			boardid: parseInt(req.params.boardid)
		}
		let reservationnoticeedit = await db.none('update reservationnotice set reservationnotice_userid= ${userid}, reservationnotice_noticepwd= ${noticepwd}, reservationnotice_noticetitle= ${noticetitle}, reservationnotice_noticecontent= ${noticecontent}, reservationnotice_noticedate= ${noticedate} where reservationnotice_id= ${boardid}', data);

		res.status(200)
		   .json({
		   		status: 'success',
		   		message: 'board edit success'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationnoticedelete = async function(req, res, next) {
	try {
		let reservationnoticedelete = await db.none('DELETE FROM reservationnotice WHERE reservationnotice_id= $1', parseInt(req.params.boardid));

		res.status(200)
		   .json({
		   		status: 'success',
		   		message: 'board delete success'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationnoticereplayadd = async function(req, res, next) {
	try {
		let data = {
			userid: req.body.userid,
			content: req.body.replaycontent,
			replaypwd: req.body.replaypwd,
			boardid: req.params.boardid,
			replaydate: new moment().format('YYYY-MM-DD HH:mm:ss')
		}

		let reservationnoticereplay = await db.one('insert into reservationnoticereplay(reservationnoticereplay_userid, reservationnoticereplay_content, reservationnoticereplay_pwd,reservationnotice_id, reservationnoticereplay_date)'+
													'values(${userid}, ${content}, ${replaypwd}, ${boardid}, ${replaydate}) RETURNING reservationnoticereplay_id, reservationnoticereplay_userid, reservationnoticereplay_content, reservationnoticereplay_date', data, event => event);
		

		res.status(200)
		   .json({
		   		status: 'success',
		   		data: reservationnoticereplay,
		   		message: 'reservationnoticereplay add sucess'
		   });
	}catch(e) {
		res.json(e.message)
	}
}
exports.reservationnoticereplayedit = async function(req, res, next) {
	try {
		let data = {
			userid: req.body.userid,
			content: req.body.replaycontent,
			replaypwd: req.body.replaypwd,
			replayid: parseInt(req.params.replayid),
			repalydate: new moment().format('YYYY-MM-DD HH:mm:ss')
		}

		let reservationreplay = await db.one('SELECT * FROM reservationnoticereplay WHERE reservationnoticereplay_id = $1', parseInt(req.params.replayid));
		
		if(data.replaypwd == reservationreplay.reservationnoticereplay_pwd) {
			let reservationnoticereplayedit = await db.none('update reservationnoticereplay set reservationnoticereplay_userid= ${userid}, reservationnoticereplay_pwd= ${replaypwd}, reservationnoticereplay_content= ${content}, reservationnoticereplay_date= ${repalydate} where reservationnoticereplay_id= ${replayid}', data);
		
			res.status(200)
			   .json({
			   		status: 'success',
			   		message: 'replay edit success'
			   });
		}else {
			res.status(200)
			   .json({
			   		status: 'fail',
			   		message: 'replay pwd not equal'
			   });
		}

		
		
	}catch(e) {
		console.log(e.message);
		res.json(e.message);
	}
}
exports.reservationnoticereplaydelete = async function(req, res, next) {
	try {
		let reservationreplay = await db.one('SELECT * FROM reservationnoticereplay WHERE reservationnoticereplay_id= $1', parseInt(req.params.replayid));

		if(reservationreplay.reservationnoticereplay_pwd == req.body.password) {
			let reservationnoticedelete = await db.none('DELETE FROM reservationnoticereplay WHERE reservationnoticereplay_id= $1', parseInt(req.params.replayid));

			res.status(200)
			   .json({
			   		status: 'success',
			   		message: 'replay delete success'
			   });
		}else {
			res.status(200)
			   .json({
			   		status: 'fail',
			   		message: 'replay pwd not equal'
			   });
		}
		

		
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationnoticeeditpasswordCheck = async function(req, res, next) {
	try {
		let reservationnoticedetail = await db.one('SELECT * FROM reservationnotice WHERE reservationnotice_id = $1', parseInt(req.params.boardid));

		if(req.body.password == reservationnoticedetail.reservationnotice_noticepwd) {
			res.status(200)
			   .json({
			   		status: 'success',
			   		message: 'password equal'
			   });
		}else {
			res.status(200)
			   .json({
			   		status: 'fail',
			   		message: 'password not equal'
			   });
		}
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationnoticedeletepasswordCheck = async function(req, res, next) {
	try {
		let reservationnoticedetail = await db.one('SELECT * FROM reservationnotice WHERE reservationnotice_id = $1', parseInt(req.params.boardid));

		if(req.body.password == reservationnoticedetail.reservationnotice_noticepwd) {
			let reservationnoticedelete = await db.none('DELETE FROM reservationnotice WHERE reservationnotice_id= $1', parseInt(req.params.boardid));
			res.status(200)
			   .json({
			   		status: 'success',
			   		message: 'delete success'
			   });
		}else {
			res.status(200)
			   .json({
			   		status: 'fail',
			   		message: 'delete fail'
			   });
		}
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationuserjoin = async function(req, res, next) {
	try {
		let data = {
			username: req.body.username,
			userpwd: req.body.userpwd,
			userphone: req.body.userphone,
			usermemo: req.body.usermemo,
			userperson: req.body.userperson,
			userpay: req.body.userpay
		}

		let reservationuser = await db.one('insert into reservationuser(user_name, user_pwd, user_phone, user_memo, user_person, user_pay)'+
										   'values(${username}, ${userpwd}, ${userphone}, ${usermemo}, ${userperson}, ${userpay}) RETURNING user_num', data, event => event);
		let reservation = await db.none('insert into reservation(reservation_year, reservation_month, reservation_day, reservation_room, reservation_usernum, reservation_status)'+
										'values($1, $2, $3, $4, $5, $6)',[parseInt(req.body.year), parseInt(req.body.month), parseInt(req.body.day), req.body.roomname, reservationuser.user_num, false]);
		
		res.status(200)
		   .json({
		   		status: 'success',
		   		message: 'reservation Ok'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.reservationuseradminjoin = async function(req, res, next) {
	try {
		let data = {
			username: req.body.username,
			userpwd: req.body.userpwd,
			userphone: req.body.userphone,
			usermemo: req.body.usermemo,
			userperson: req.body.userperson,
			userpay: req.body.userpay
		}

		let reservationuser = await db.one('insert into reservationuser(user_name, user_pwd, user_phone, user_memo, user_person, user_pay)'+
										   'values(${username}, ${userpwd}, ${userphone}, ${usermemo}, ${userperson}, ${userpay}) RETURNING user_num', data, event => event);
		let reservation = await db.none('insert into reservation(reservation_year, reservation_month, reservation_day, reservation_room, reservation_usernum, reservation_status)'+
										'values($1, $2, $3, $4, $5, $6)',[parseInt(req.body.year), parseInt(req.body.month), parseInt(req.body.day), req.body.roomname, reservationuser.user_num, true]);
		
		res.status(200)
		   .json({
		   		status: 'success',
		   		message: 'reservation Ok'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.popuplist = async function(req, res, next) {
	try {
		let popuplist = await db.any('SELECT * FROM popup ORDER BY popup_id DESC');

		console.log(popuplist);

		res.status(200)
		   .json({
		   		status: 'success',
		   		data: popuplist[0],
		   		message: 'popuplist'
		   });
	}catch(e) {
		res.json(e.message);
	}
}
exports.popupwrite = async function(req, res, next) {
	try {
		let data = {
			title: req.body.title,
			content: req.body.content
		}

		let popupwrite = await db.none('insert into popup(popup_title, popup_content)'+
									   'values(${title}, ${content})', data);

		res.status(200)
		   .json({
		   		status: 'success',
		   		message: 'popupwrite success'
		   });
	}catch(e) {
		res.json(e.message);
	}
}