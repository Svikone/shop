const express = require("express");
const Controller = require("../controller/cart");


const Router = express.Router()


Router.post("/all",  Controller.getCart);


module.exports = Router;
