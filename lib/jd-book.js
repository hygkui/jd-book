var request = require('request');
var cheerio = require("cheerio");

var config = {
  url: '',
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

exports.getbook = function (options, callback) {
  config.url = options.url || config.url;
  config.startStr = options.startStr || config.startStr;
  config.endStr = options.endStr || config.endStr;

  request(config.url, function (error, response, body) {
    if (error)
      return callback(error);

    if (!error && response.statusCode == 404) {
      return callback('404:not found');
    }

    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(body);
      var book_str = $("script")[0].children[0].data.trim();
      var product_obj = parseStrToJSON(book_str);

      if (product_obj.err)
        return callback(product_obj.err)

      callback(null, product_obj.book);
    }
  });
};
