const logger = require('morgan');
const express = require("express");
const sh = express();

var docs = require('./route/docs');
var api = require('./route/api');

sh.use(logger('dev'));
sh.get('/', (req, res) => {
  res.redirect('/playground')
})
sh.use('/', docs);
sh.use('/api', api);

sh.listen(5000, async () => {
  console.log({
    status: 'Active',
    message: 'powered by https://github.com/xznsenpai'
  })
});
/*
penulis: https://github.com/xznsenpai
*/