const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express')
const multer = require('multer');
const unless = require("express-unless")

const commonMiddleware = (app) => {
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(multer().any());

    console.log("form")
};

module.exports = commonMiddleware;
