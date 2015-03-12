var request = require('request');
var cheerio = require("cheerio");

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
   book:{
     skuid: '',
     name: '',
     url: '',
     jqimg: '',
     price: '',
     buy_price: '',
     author: '',
     pub: '',
     pub_time: ''
   }
  }
  try {
    var book = JSON.parse(preParseStrSlice(book_product_str));
    result.book.skuid = book.skuid;
    result.book.name = book.name;
    result.book.url = book.url;
    result.book.jqimg = book.jqimg;
    result.book.price = book.wMaprice;
    result.book.buy_price = book.wMeprice;
  } catch (err) {
    result.err = 'err when json parse.\n' + err.toString();
  }

  return result;
  
  // get author
  // 1. $('#p-author').text()
  // 2. $('#product-authorinfo').text()

  //if (result.book.name === '') { // json parse error.
    // get name,
  //} else {
    // get
  //}
};

//
// var details = $('.detail-list>li');
//
// [0].textContent.split('：');

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
