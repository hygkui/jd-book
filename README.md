[![Build Status](https://travis-ci.org/hygkui/jd-book.svg?branch=master)](https://travis-ci.org/hygkui/jd-book)

# what is jd-book
**jd-book** can help you get book's information from [jd.com](www.jd.com).

## why
Though [jd.com](www.jd.com) has it's api system, it is difficult to use.

And I only want is the book's information from the book's url on [jd.com](www.jd.com)

## install

```
npm install jd-book
```
## usage

```
var jdBook = require('jd-book');
jdBook.getbook(url,callback);
```
## config
### url:

the url of the book form jd.com

### callback:

```
function (data) {
  // ...
}
```
* data format:

```
{
  err: ;
  book: {
    ...
  }
}
```
## example

run this code:

```
var jdBook = require('jd-book');
var url = 'http://item.jd.com/11371982.html';
var show = function (data) {
  if (!data.err)
    console.log(data.book);
}
jdBook.getbook(url, show);

```

the result should be like this：

```
{ err: null,
  book: {
    skuid: '11371982',
    name: '聪明豆绘本系列（第2辑）（套装共9册）',
    url: undefined,
    jqimg: 'http://img10.360buyimg.com/n0/g13/M04/11/0D/rBEhU1LTb8kIAAAAAAP8X7M6epEAAH3cwOFK2sAA_x3284.jpg',
    price: '134.10',
    buy_price: '103.10',
    author: '',
    pub: '',
    pub_time: ''
  }
}
```

## test

```
npm test
```
or

```
node tests/getbook-test.js
```
