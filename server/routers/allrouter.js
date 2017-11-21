const controller = require('../controllers/controller.js');


exports.setRequestUrl = function(app) {
	app.route('/reservation')
	   .post(controller.reservationuseradminjoin);
	app.route('/reservation/:boardid')
	   .delete(controller.reservationdelete);
	app.route('/reservation/list')
	   .get(controller.reservationadminlist)
	   .post(controller.reservationlist);
	app.route('/reservation/check')
	   .post(controller.reservationlistcheck);
	app.route('/user')
	   .post(controller.useradd);
	app.route('/user/login')
	   .post(controller.userlogin);
	app.route('/notice')
	   .get(controller.noticelist)
	   .post(controller.noticeadd);
	app.route('/notice/:boardid')
	   .post(controller.noticedetail)
	   .put(controller.noticeedit)
	   .delete(controller.noticedelete);
	app.route('/reservationnotice')
	   .get(controller.reservationnoticelist)
	   .post(controller.reservationnoticeadd);
	app.route('/reservationnotice/:boardid')
	   .get(controller.reservationnoticedetail)
	   .post(controller.reservationnoticereplayadd)
	   .put(controller.reservationnoticeedit)
	   .delete(controller.reservationnoticedelete);   
	app.route('/reservationnoticereplay/:replayid')
	   .put(controller.reservationnoticereplayedit);
	app.route('/reservationnoticereplay/:replayid/deletereplay')
	   .post(controller.reservationnoticereplaydelete);
	app.route('/reservationnotice/:boardid/editpassword')
	   .post(controller.reservationnoticeeditpasswordCheck);
	app.route('/reservationnotice/:boardid/deletepassword')
	   .post(controller.reservationnoticedeletepasswordCheck);
	app.route('/reservation/user')
	   .post(controller.reservationuserjoin);
	app.route('/reservation/user/:userid')
	   .get(controller.reservationadminuserinfo);
	app.route('/reservation/waiting')
	   .get(controller.reservationadminwaitinglist);
	app.route('/reservation/waiting/:boardid')
	   .post(controller.reservationadminwaitingok)
	   .put(controller.reservationadminwaitingcancel);
	app.route('/popup')
	   .get(controller.popuplist)
	   .post(controller.popupwrite);

	   


	   
}