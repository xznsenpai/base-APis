const express = require('express');
const sh = express.Router();
var api_skizo = "https://skizo.tech/api/"
var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'https://skizo.tech'
};
var no_link_message = {
  creator: 'Zainudin',
  message: 'Mohon maaf, tidak ada URL yang dimasukkan ke dalam body.'
};
var no_region_message = {
  creator: 'Zainudin',
  message: 'Mohon maaf, tidak ada REGION yang dimasukkan ke dalam body.'
};
var no_username_message = {
  creator: 'Zainudin',
  message: 'Mohon maaf, tidak ada USERNAME yang dimasukkan ke dalam body.'
};

/*Download all*/
sh.post('/download', async (req, res) => {
  if(!req.body.url) return res.json(no_link_message)
  var resp = await fetch(api_skizo + 'download', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      url: req.body.url
    }),
  });
  res.json(await resp.json());
});
/*Tiktok Downloaders*/
sh.post('/tiktok', async (req, res) => {
  if(!req.body.url) return res.json(no_link_message)
  var resp = await fetch(api_skizo + 'tiktok', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      url: req.body.url
    }),
  });
  res.json(await resp.json());
});
sh.post('/tiktok/search', async (req, res) => {
  if(!req.body.search) return res.json(no_username_message)
  var resp = await fetch(api_skizo + 'ttsearch', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      search: req.body.search
    }),
  });
  res.json(await resp.json());
});
sh.post('/tiktok/trending-feed', async (req, res) => {
  if(!req.body.region) return res.json(no_region_message)
  var resp = await fetch(api_skizo + 'tttrending', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      region: req.body.region
    }),
  });
  res.json(await resp.json());
});

module.exports = sh;
/*
penulis: https://github.com/xznsenpai
*/