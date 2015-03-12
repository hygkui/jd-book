var request = require('request');
var cheerio = require("cheerio");
var async = require('async');

var config = {
  startStr: 'window.pageConfig={compatible:true,searchType: 1,product:',
  endStr: '};'
}

var preParseStrSlice = function (book_str) {
  return book_str.slice(config.startStr.length, 0 - config.endStr.length);
}

var parseStrToJSON = function (book_product_str) {
 var result = {
   err: null,
   book:{}
 } 
 try {
    result.book = JSON.parse(preParseStrSlice(book_product_str));
  } catch (err) {
    result.err = 'err when json parse.\n' + err.toString();
  }
 return result;
};

exports.getbook = function (url, callback) {
  request(url, function (error, response, body) {
    var result = {
      err: null,
      book:{}
    } 
    if (error)
      result.err = error;

    if (!error && response.statusCode == 404) {
      result.err = '404:not found';
    }

    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(body);
      var book_str = $("script")[0].children[0].data.trim();
      result = parseStrToJSON(book_str);
    }
    callback(result);
   });
};

