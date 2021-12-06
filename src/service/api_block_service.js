'use strict';

const config = require('../config/config.js');
const common = require('./api_common.js');

const rpc = require('../rpc/rpc.js');
const database = require('./database.js');

const fs = require('fs');

var Block = {};

Block.getTransaction = function(req,res) {
	var transaction_id = req.body.transaction_id;

	var args = {};
	args.api = "database_api";
	args.func = "get_transaction";
	var param = [];
	param.push(transaction_id);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.connection;
		delete data.rpc;
	
		res.json(data);
	};

	database.doSearch(args);

};

Block.getTransactionCount = function(req,res) {
	var block = req.body.block;

	var args = {};
	args.api = "database_api";
	args.func = "get_transaction_count";
	var param = [];
	param.push(block);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.connection;
		delete data.rpc;
	
		res.json(data);
	};

	database.doSearch(args);

};

Block.getBlockRange = function(req,res) {
	var block_num = req.body.block_num;
	var num = req.body.num;

	var args = {};
	args.api = "database_api";
	args.func = "get_block_range";
	var param = [];
	param.push(block_num);
	param.push(num);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.connection;
		delete data.rpc;
	
		res.json(data);
	};

	database.doSearch(args);

};

Block.getOperationList = function(req,res) {
	var start = req.body.start;
	var limit = req.body.limit;

	var args = {};
	args.api = "database_api";
	args.func = "get_operation_list";
	var param = [];
	param.push(start);
	param.push(limit);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.connection;
		delete data.rpc;
	
		res.json(data);
	};

	database.doSearch(args);

};

Block.getTransactionDayCount = function(req,res) {
	var day = req.body.day;

	var args = {};
	args.api = "database_api";
	args.func = "get_transaction_day_count";
	var param = [];
	param.push(day);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.connection;
		delete data.rpc;
	
		res.json(data);
	};

	database.doSearch(args);

};

Block.getBalanceRank = function(req,res) {
	var start = req.body.start;
	var limit = req.body.limit;

	var args = {};
	args.api = "database_api";
	args.func = "get_balance_rank";
	var param = [];
	param.push(start);
	param.push(limit);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.connection;
		delete data.rpc;
	
		res.json(data);
	};

	database.doSearch(args);

};

Block.getBlockHeader = function(req,res) {
	var blockNum = req.body.blockNum;


	var args = {};
	args.api = "database_api";
	args.func = "get_block_header";
	var param = [];
	param.push(blockNum);
	args.param = param;

	args.callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.connection;
		delete data.rpc;
	
		res.json(data);
	};

	database.doSearch(args);

};

Block.getBlock = function(req,res) {
	var blockNum = req.body.blockNum;

	var callback = function(data){
		if(typeof data.connection != "undefined") {		
			data.rpc.close(data.connection);
		}
		delete data.connection;
		delete data.rpc;
	
		res.json(data);
	};

	this.getBlockInfo(blockNum,callback);
	
};

Block.getBlocks = function(req,res) {

	var blockInfos = [];

	var blockNums = req.body.blockNums;	
	var blockNums = JSON.parse(blockNums);
	
	var index = 0;
	var blockNum = blockNums[index]; 

	var callback = function(data){
		
		if(typeof data.connection != "undefined") {
			var connection = data.connection;
			var rpc = data.rpc;
			delete data.rpc;
			delete data.connection;
			blockInfos.push(data);
			//console.log("index :: " + index  + " blockNum :: " + blockNum  + " length :: " + blockNums.length );
			index++;

			
			if( index == blockNums.length ){
				rpc.close(connection);
				res.json(blockInfos);
			}else {
				blockNum = blockNums[index]; 
				Block.getBlockInfo(blockNum,callback,connection);
			}
		}else {
			delete data.connection;
			delete data.rpc;
		
			res.json(data);
		}
	};

	this.getBlockInfo(blockNum,callback);
};

Block.getBlockInfo = function(blockNum,callback,connection = null){
	var args = {}; //console.log("connection :: " + connection);
	args.connection = connection;	

	args.api = "database_api";
	args.func = "get_block";
	
	var param = [];
	param.push(blockNum);
	args.param = param;
	args.callback = callback;

	database.doSearch(args);
}

Block.getOpsInBlock = function(req,res){
	const block_num = req.body.block_num;
	const only_virtual = req.body.only_virtual;

	var args = {};
	args.api = "database_api";
	args.func = "get_ops_in_block";

	var param = [];
	param.push(block_num);
	param.push(only_virtual);
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

module.exports = Block;