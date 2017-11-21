const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const http = require('http');
const routerHelper = require('./routers/allRouter');
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	next();
});
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routerHelper.setRequestUrl(app);

http.createServer(app).listen(3000, function() {
	console.log("Http server "+ 3000);
});