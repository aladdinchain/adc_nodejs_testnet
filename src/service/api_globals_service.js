'use strict';

const config = require('../config/config.js');
const common = require('./api_common.js');

const rpc = require('../rpc/rpc.js');
const database = require('./database.js');

var Globals = {};

Globals.getGlobal = function(req,res){
	var func = req.body.func;
		
	var args = {};
	args.api = "database_api";
	args.func = func;
	
	args.param = [];
	
	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);	
}

Globals.getDappFee = function(req,res){
	var args = {};
	args.api = "database_api";
	args.func = "get_dapp_transaction_fee";
	
	args.param = [];
	
	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);	
}

module.exports = Globals;