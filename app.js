// Node.js based backend the the AllHandsAttendance web app
//                Copyright 2012 Zach Wick
//                    zach@zachwick.com 
//                 Released under the GPLv3 license

// Global Vars
var application_root = __dirname;
var express = require("express");
var path = require("path");
var _ = require("underscore");

// App Config
var app = express();
app.configure(function() {
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(app.router);
		app.use(express.static(path.join(application_root, "public")));
		app.use(express.errorHandler({dumpExceptions: true, showStack: true }));
});

// Routes|Methods
app.get('/home',function(req,res) {
		res.send("/home route is working");
});

// Launch Server
app.listen(8080);