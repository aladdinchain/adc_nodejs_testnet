'use strict';

const config = require('../config/config.js');

const rpc = require('../rpc/rpc.js');
const broadcast = require('./broadcast.js');
const database = require('./database.js');
const common = require('./api_common.js');

var Mining = {};

var _bluebird = require('bluebird');
var _bluebird2 = _interopRequireDefault(_bluebird);

var auth = require('../lib/auth');
var _auth2 = _interopRequireDefault(auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Mining.get_reward_turn_list = function (req, res) {

	var from = req.body.from;
	var limit = req.body.limit;

	var args = {};
	args.api = "database_api";
	args.func = "get_reward_turn_list";

	var param = [];
	param.push(from);
	param.push(limit);
	args.param = param;

	args.callback = function (data) {
		if (typeof data.connection != "undefined") {
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);
};

Mining.get_mining_accounts = function (req, res) {

	const from = req.body.from;
	const limit = req.body.limit;

	var args = {};
	args.api = "database_api";
	args.func = "get_mining_accounts";

	var param = [];
	param.push(from);
	param.push(limit);
	args.param = param;

	args.callback = function (data) {
		if (typeof data.connection != "undefined") {
			data.rpc.close(data.connection);
		}
		delete data.rpc;
		delete data.connection;
		res.json(data);
	};

	database.doSearch(args);
};

module.exports = Mining;
