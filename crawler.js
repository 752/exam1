const https = require('http');

function crawler(cb) {
  const req = https.get('http://johnyu.cn:3000/albums');
  req.end();
  req.on('response', (res) => {
    res.on('data', (data) => {
      // console.log(data.toString())
      cb(JSON.parse(data.toString()))
    })
  });
}

module.exports = crawler