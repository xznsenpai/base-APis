const express = require('express');
const {
	igApi,
	getCookie
} = require("insta-fetcher");
const sh = express.Router();
/*Respon nyet*/
var creator = 'Zainudin'
var no_text_message = {
	creator: creator,
	message: 'TEXT not found, please enter TEXT'
}
var no_link_message = {
	creator: creator,
	message: 'URL not found, please enter URL'
};
var no_cookie_message = {
	creator: creator,
	message: 'COOKIE not found, please enter COOKIE'
}
var Error_message = {
	creator: creator,
	message: 'Sorry, an internal error occurred on the server'
}
//Downloaders
sh.post('/instagram', async (req, res) => {
	if (!req.body.url) return res.status(400).json(no_link_message);
	if (!req.body.cookie) return res.status(400).json(no_cookie_message)
	let ig = new igApi(req.body.cookie)
	ig.fetchPost(req.body.url)
		.then((v) => {
			res.status(200).json({
				creator: creator,
				...v
			});
		})
		.catch((Error) => {
			console.log(Error);
			res.status(500).json({
				...Error_message,
				Error: Error.toString()
			});
		});
});
sh.post('/instagram/getcookie', async (req, res) => {
	if (!req.body.username) return res.status(400).json({
		creator: creator,
		message: 'input username'
	});
	if (!req.body.password) return res.status(400).json({
		creator: creator,
		message: 'input password'
	});
	try {
		const session_id = await getCookie(req.body.username, req.body.password);
		res.json({
			creator: creator,
			cookie: session_id
		})
	} catch (Error) {
		console.log(Error)
		res.status(400).json({
			creator: creator,
			message: Error
		})
	}
});

module.exports = sh;