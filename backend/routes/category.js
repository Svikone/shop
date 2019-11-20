const express = require("express");
const Controller = require("../controller/category");


const Router = express.Router()

Router.post("/marca",  Controller.getMarc);

module.exports = Router;
