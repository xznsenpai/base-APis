const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const express = require('express');
const sh = express.Router();

sh.use(express.json());
sh.use(express.urlencoded({ extended: true }));

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api-Skizo",
      version: "1.0.0",
    },
  },
  apis: ["./route/*.js"],
};

/**
 * @swagger
 * tags:
 *   name: Download
 *   description: Fb, ig, tt, twit, yt
 */
/**
 * @swagger
 * tags:
 *   name: TikTok
 *   description: Tools
 */

/**
 * @swagger
 * /api/download:
 *   post:
 *     summary: Download All	
 *     tags: [Download]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 format: url
 *                 example: ""
 *                 description: URL Tiktok yang akan diunduh
 *     responses:
 *       200:
 *         description: Powered By Skizo.tech
 *         content:
 *           application/json:
 *             schema:
 */
/**
 * @swagger
 * /api/tiktok:
 *   post:
 *     summary: Tiktok Downloader
 *     tags: [TikTok]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 format: url
 *                 example: "https://vm.tiktok.com/ZSNoRuPf6"
 *                 description: URL Tiktok yang akan diunduh
 *     responses:
 *       200:
 *         description: Powered By Skizo.tech
 *         content:
 *           application/json:
 *             schema:
 */

/**
 * @swagger
 * /api/tiktok/search:
 *   post:
 *     summary: Tiktok Search
 *     tags: [TikTok]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               search:
 *                 type: string
 *                 format: search
 *                 example: "cosplay nana"
 *                 description: no desk nyet
 *     responses:
 *       200:
 *         description: Powered By Skizo.tech
 *         content:
 *           application/json:
 *             schema:
 */
 
 /**
 * @swagger
 * /api/tiktok/trending-feed:
 *   post:
 *     summary: Tiktok Trending
 *     tags: [TikTok]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               region:
 *                 type: string
 *                 format: region
 *                 example: "ID"
 *                 description: no desk nyet
 *     responses:
 *       200:
 *         description: Powered By Skizo.tech
 *         content:
 *           application/json:
 *             schema:
 */

const swaggerDoc = swaggerJSDoc(options);
sh.use("/playground", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
module.exports = sh;
/*
penulis: https://github.com/xznsenpai
*/