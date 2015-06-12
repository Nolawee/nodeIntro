var fs = require("fs");
var express = require("express");
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;

var mongo = require("mongodb");
var dbHost = "127.0.0.1";
var dbpPort = mongo.Connection.DEFAULT_PORT;

var app = express.createServer();