var jdBook = require('../lib/jd-book.js');

var test_1 = function (data) {
  var expect_book_skuid = '11371982';
  var expect_book_name = '聪明豆绘本系列（第2辑）（套装共9册）';
  if (data.err) {
    console.log('sth wrong with getbook. \n' + data.err);
    return ;
  }
  if (data.book.skuid === expect_book_skuid) {
    console.log('1/2: test passed! skuid as expected.');
  } else {
    console.log('test failed! skuid not as expected.\n\t[expected:"'+ expect_book_skuid +'"]\n\t[  result:"' + data.book.skuid + '"]')
  }
  if (data.book.name === expect_book_name) {
    console.log('2/2: test passed! name as expected.');
  }else {
    console.log('test failed! name not as expected.\n\t[expected:"' + expect_book_name + '"]\n\t[  result:"' + data.book.name + '"]');
  }
};

var test_2 = function (data) {
    var expect_err = 'err when json parse.\nSyntaxError: Unexpected token v';
    if (data.err && data.err === expect_err) {
        console.log('test passed!');
    }
};


// 测试：
var url_1 = "http://item.jd.com/11371982.html";
var url_2 = "http://item.jd.com/1171982.html";
jdBook.getbook(url_1, test_1);
jdBook.getbook(url_2, test_2);
