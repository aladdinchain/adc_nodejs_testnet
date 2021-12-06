'use strict';

const config = require('../config/config.js');
const common = require('./api_common.js');

const rpc = require('../rpc/rpc.js');
const database = require('./database.js');

var Accounts = {};

var _bluebird = require('bluebird');
var _bluebird2 = _interopRequireDefault(_bluebird);

var auth = require('../lib/auth');
var _auth2 = _interopRequireDefault(auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Accounts.getBobserver = function(req, res) {
	var account_name = req.body.account_name;
	
	var args = {};
	args.api = "database_api";
	args.func = "get_bobserver_by_account";

	var param = [];
	param.push(account_name);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);
};

Accounts.getAccounts = function(req,res){
	var usernames = req.body.usernames;
	usernames = JSON.parse(usernames);
	
	var args = {};
	args.api = "database_api";
	args.func = "get_accounts";

	var param = [];
	var subparam = [];
	for(var i=0;i<usernames.length;i++){
		subparam.push(usernames[i]);
	}
	param.push(subparam);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);
};

Accounts.getAccount = function(req,res){
	var username = req.body.username;	
	
	var args = {};
	args.api = "database_api";
	args.func = "get_accounts";

	var param = [];
	var subparam = [];
	//for(var i=0;i<usernames.length;i++){
		subparam.push(username);
	//}
	param.push(subparam);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);
};

Accounts.lookupAccountNames = function(req,res){
	var accountNames = req.body.accountNames;	
	accountNames = JSON.parse(accountNames);

	var args = {};
	args.api = "database_api";
	args.func = "lookup_account_names";

	var param = [];
	var subparam = [];
	for(var i=0;i<accountNames.length;i++){
		subparam.push(accountNames[i]);
	}
	param.push(subparam);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);
};

Accounts.lookupAccounts = function(req,res){
	var lowerBoundName = req.body.lowerBoundName;
	var limit = req.body.limit;

	var args = {};
	args.api = "database_api";
	args.func = "lookup_accounts";

	var param = [];
	param.push(lowerBoundName);
	param.push(limit);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);
};

Accounts.getAccountCount = function(req,res){
	var args = {};
	args.api = "database_api";
	args.func = "get_account_count";

	var param = [];
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);
};

Accounts.getAccountHistory = function(req,res){
	var account = req.body.account;
	var from = req.body.from;
	var limit = req.body.limit;

	var args = {};
	args.api = "database_api";
	args.func = "get_account_history";

	var param = [];
	param.push(account);
	param.push(from);
	param.push(limit);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);
};

Accounts.getAccountTransferToHistory = function(req,res){
	var account = req.body.account;

	var args = {};
	args.api = "database_api";
	args.func = "get_account_transfer_to_history";

	var param = [];
	param.push(account);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);
};

Accounts.getAccountTransferHistory = function(req,res){
	var account = req.body.account;
	var from = req.body.from;
	var limit = req.body.limit;

	var args = {};
	args.api = "database_api";
	args.func = "get_account_transfer_history";

	var param = [];
	param.push(account);
	param.push(from);
	param.push(limit);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);
};

Accounts.getAccountTokenSymbolTransferHistory = function(req,res){
	const account = req.body.account;
	const symbol = req.body.symbol;
	const from = req.body.from;
	const limit = req.body.limit;

	var args = {};
	args.api = "database_api";
	args.func = "get_account_token_symbol_transfer_history";

	var param = [];
	param.push(account);
	param.push(symbol);
	param.push(from);
	param.push(limit);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);
};

Accounts.getAccountTokenTransferHistory = function(req,res){
	var account = req.body.account;
	var from = req.body.from;
	var limit = req.body.limit;

	var args = {};
	args.api = "database_api";
	args.func = "get_account_token_transfer_history";

	var param = [];
	param.push(account);
	param.push(from);
	param.push(limit);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);
};

Accounts.getAccountTokenTransferHistoryCount = function(req,res){
	var account = req.body.account;
	var from = -1;
	var limit = 0;

	var args = {};
	args.api = "database_api";
	args.func = "get_account_token_transfer_history";

	var param = [];
	param.push(account);
	param.push(from);
	param.push(limit);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;

		var result = {};
		result.status = data.status;
		if ( data.status == "success" )
		{
			result.num = data.result[0][0] + 1;
		}
		res.json(result);
	};

	database.doSearch(args);
};

Accounts.getAccountTransferHistoryCount = function(req,res){
	var account = req.body.account;
	var from = -1;
	var limit = 0;

	var args = {};
	args.api = "database_api";
	args.func = "get_account_transfer_history";

	var param = [];
	param.push(account);
	param.push(from);
	param.push(limit);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;

		var result = {};
		result.status = data.status;
		if ( data.status == "success" )
		{
			result.num = data.result[0][0] + 1;
		}
		res.json(result);
	};

	database.doSearch(args);
};

Accounts.getOwnerHistory = function(req,res){
	var account = req.body.account;

	var args = {};
	args.api = "database_api";
	args.func = "get_owner_history";

	var param = [];
	param.push(account);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);
};

Accounts.getRecoveryRequest = function(req,res){
	var account = req.body.account;

	var args = {};
	args.api = "database_api";
	args.func = "get_recovery_request";

	var param = [];
	param.push(account);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);
};

Accounts.lookupBpAccounts = function(req,res){

	// var limit = req.body.limit;
	var args = {};
	args.api = "database_api";
	args.func = "lookup_bproducer_accounts";

	var param = [];
	// param.push(limit);

	args.param = param;
	
	args.callback = function(data){
		if(typeof data.connection != "undefined") {     
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};
	
	database.doSearch(args);
};

Accounts.lookupBoAccounts = function(req,res){

	var lowerboundname = req.body.lowerboundname;
	var limit = req.body.limit;
	var args = {};
	args.api = "database_api";
	args.func = "lookup_bobserver_accounts";

	var param = [];
	param.push(lowerboundname);
	param.push(limit);

	args.param = param;
	
	args.callback = function(data){
		if(typeof data.connection != "undefined") {     
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};
	
	database.doSearch(args);
};

Accounts.getBobyAccount = function(req,res){

	var owner_account = req.body.owner_account;
	var args = {};
	args.api = "database_api";
	args.func = "get_bobserver_by_account";

	var param = [];
	param.push(owner_account);

	args.param = param;
	
	args.callback = function(data){
		if(typeof data.connection != "undefined") {     
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};
	
	database.doSearch(args);
};

Accounts.getAuthToken = function(req,res){
	var account = req.body.account;
	var auth_type = req.body.auth_type;

	var args = {};
	args.api = "database_api";
	args.func = "get_auth_token";

	var param = [];
	param.push(account);
	param.push(auth_type);
	args.param = param;
	
	args.callback = function(data){
		if(typeof data.connection != "undefined") {     
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};
	
	database.doSearch(args);
};

Accounts.getAuthTokenList = function(req,res){
	var from = req.body.from;
	var limit = req.body.limit;

	var args = {};
	args.api = "database_api";
	args.func = "get_auth_token_list";

	var param = [];
	param.push(from);
	param.push(limit);
	args.param = param;
	
	args.callback = function(data){
		if(typeof data.connection != "undefined") {     
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};
	
	database.doSearch(args);
};

Accounts.getBalanceRank = function(req,res){
	var from = req.body.from;
	var limit = req.body.limit;
	
	var args = {};
	args.api = "database_api";
	args.func = "get_balance_rank";

	var param = [];
	var subparam = [];
	param.push(subparam);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);
};

module.exports = Accounts;