const express = require("express");
const Controller = require("../controller/category");


const Router = express.Router()

Router.post("/marca",  Controller.getMarc);
Router.post("/model",  Controller.getModel);
Router.post("/all",  Controller.getCategorys);
Router.post("/product",  Controller.getCatalogs);



module.exports = Router;
