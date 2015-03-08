[![Build Status](https://travis-ci.org/hygkui/jd-book.svg?branch=master)](https://travis-ci.org/hygkui/jd-book)

# what is jd-book
**jd-book** can help you get book's information from [jd.com](www.jd.com).

## why
though [jd.com](www.jd.com) has it's api system, it is difficult to use.

And I only want is the book's information from the book's url on [jd.com](www.jd.com)

## install

```
npm install jd-book --save
```
## usage

```
var jdBook = require('jd-book');
jdBook.getbook(options, callback);

```

### options 

```
var options = {
    url: '',
    startStr: '',
    endStr: ''
};
```
* url : is **required**, the url of the book.
* the other two parameter is **not required**, leave it with *null*.

### callback
define your own callback function, it provide two params:

* err : if we got sth. wrong .
* data: JSON object contains the book's information.

## example

run this code:

```
var jdBook = require('jd-book');
var url = 'http://item.jd.com/11371982.html';
var showResult = function (err, data) {
    if(!err) {
        console.log(data);
    }
};
jdBook.getbook({url: url}, showResult);

```

the result should be like this：

```
{ skuid: '11371982',
  skus: '',
  name: '聪明豆绘本系列（第2辑）（套装共9册）',
  skuidkey: '682077079EEE09C350600AC871FCBB10',
  href: 'http://item.jd.com/11371982.html',
  src: 'g13/M04/11/0D/rBEhU1LTb8kIAAAAAAP8X7M6epEAAH3cwOFK2sAA_x3284.jpg',
  jqimg: 'http://img10.360buyimg.com/n0/g13/M04/11/0D/rBEhU1LTb8kIAAAAAAP8X7M6epEAAH3cwOFK2sAA_x3284.jpg',
  wMaprice: '134.10',
  wMeprice: '103.10',
  cat: [ 1713, 3263, 4761 ],
  brand: '',
  tips: false,
  type: 1,
  n: false,
  g: false,
  warestatus: 1 }
```

## test

```
npm test
```
or

```
node tests/getbook-test.js
```
