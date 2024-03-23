// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var comments = [];

var server = http.createServer(function(req, res) {
  var parseUrl = url.parse(req.url, true);
  var pathName = parseUrl