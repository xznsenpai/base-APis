const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs.json');
const express = require('express');
const sh = express.Router();

sh.use(express.json());
sh.use(express.urlencoded({
	extended: true
}));

sh.use('/playground', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
module.exports = sh;