const express = require('express');
const sh = express.Router();

let { igApi, getCookie } = require("insta-fetcher");
let ig = new igApi("")//Cookie instagram.com

/*Respon nyet*/
var creator = 'https://github.com/xznsenpai'
var no_link_message = {
  creator: creator,
  message: 'Mohon maaf, tidak ada URL yang dimasukkan ke dalam.'
};
var no_user_message = {
  creator: creator,
  message: 'Mohon maaf, tidak ada USER yang dimasukkan ke dalam.'
};
var Error_message = {
  creator: creator,
  message: 'Maaf, terjadi kesalahan internal pada server. Silakan coba lagi nanti atau hubungi tim dukungan teknis.'
}

/*Fetch instagram api with full details and simplified json metadata*/
sh.get('/instagram', async (req, res) => {
  if (!req.query.url) return res.status(400).json(no_link_message);
  ig.fetchPost(req.query.url)
    .then((v) => {
      res.status(200).json({
        creator: creator,
        ...v
      });
    })
    .catch((Error) => {
      console.log(Error);
      res.status(500).json(Error_message);
    });
});
sh.post('/instagram', async (req, res) => {
  if (!req.body.url) return res.status(400).json(no_link_message);
  ig.fetchPost(req.body.url)
    .then((v) => {
      res.status(200).json({
        creator: creator,
        ...v
      });
    })
    .catch((Error) => {
      console.log(Error);
      res.status(500).json(Error_message);
    });
});

sh.get('/instagram/stalk', async (req, res) => {
  if (!req.query.user) return res.status(400).json(no_user_message);
  ig.fetchUser(req.query.user)
    .then((v) => {
      res.status(200).json({
        creator: creator,
        ...v
      });
    })
    .catch((Error) => {
      console.log(Error);
      res.status(500).json(Error_message);
    });
});
sh.post('/instagram/stalk', async (req, res) => {
  if (!req.body.user) return res.status(400).json(no_user_message);
  ig.fetchUser(req.body.user)
    .then((v) => {
      res.status(200).json({
        creator: creator,
        ...v
      });
    })
    .catch((Error) => {
      console.log(Error);
      res.status(500).json(Error_message);
    });
});

module.exports = sh;
/*
penulis: https://github.com/xznsenpai
*/