const save = require('./save');
const crawler = require('./crawler');

crawler((data) => {
  save(data)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
})