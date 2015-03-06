var book_url_1 = "http://item.jd.com/11371982.html";
var startStr = 'window.pageConfig={compatible:true,searchType: 1,product:';
var endStr = '};';
var expect_book_skuid = '11371982';
var expect_book_name = '聪明豆绘本系列（第2辑）（套装共9册）';

var jdBook = require('../lib/jd-book.js');
var testCallback = function (err, data) {
  if (err) {
    console.log('sth. failed to get the obj.');
  }
  if (!err) {
    if (data.skuid === expect_book_skuid) {
      console.log('1/2: test passed! skuid as expected.');
    } else {
      console.log('test failed! skuid not as expected.\n\t[expected:"'+ expect_book_skuid +'"]\n\t[  result:"' + data.skuid + '"]')
    }
    if (data.name === expect_book_name) {
      console.log('2/2: test passed! name as expected.');
    }else {
      console.log('test failed! name not as expected.\n\t[expected:"' + expect_book_name + '"]\n\t[  result:"' + data.name + '"]');
    }
  }
};

// 测试：通过
// var options_1 = {};
// jdBook.getbook(book_url_1, options_1, testCallback);

// 测试：应该报错
// var options_2 = {
//   startStr: startStr,
//   endStr: endStr+';;'
// };
// jdBook.getbook(book_url_1, options_2, testCallback);

// 测试：通过
var options_3 = {
  url: book_url_1,
  startStr: startStr,
  endStr: endStr
};
jdBook.getbook(options_3, testCallback);
