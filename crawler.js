const http = require('http');

function crawler(cb) {
  const req = http.get('http://johnyu.cn:3000/albums');
  req.end();
  req.on('response', (res) => {
    let data = ''
    res.on('data', (chunk) => {
      data += chunk;
    })
    res.on('end', () => {
      cb(JSON.parse(data.toString()))
    })
  });
}

module.exports = crawler