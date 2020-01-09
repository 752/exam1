const assert = require('assert')
const save = require('../save');
const crawler = require('../crawler');

describe('测试exam1', function () {
  it('测试爬虫', function (done) {
    crawler((data) => {
      assert.ok(data)
      done()
    })
  })
  it('测试保存', function (done) {
    save({
      album_id: '1',
      album_name: '2',
      public_time: '3',
      week: 4,
      price: 100,
      cover: 'url',
      singers: [{a: 'test'}]
    })
    .then((data) => {
      assert.ok(data)
      done()
    })
    .catch(err => done(err))
  })
})