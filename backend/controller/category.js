const ModulesMarca = require("../model/marca");
const ModulesModel = require("../model/model");
const ModulesCategory = require("../model/category");
const ModulesCatalog = require("../model/catalog");

exports.getMarc = (req, res) => {
    ModulesMarca.find().then(result => {
        console.log(result)
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
    // test = {
    //     name:"toyota",
    //     url_img:"wd"
    // }
    // ModulesMarca(test).save().then(result => {
    //     res.send(result).sendStatus(200);
    // }).catch(err => {
    // })
}

exports.getModel = (req, res) => {

    ModulesModel.find({marca: req.body.id}).then(result => {
        console.log(result)
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}

exports.getCategorys = (req, res) => {
    ModulesCategory.find({}).then(result => {
        console.log(result)
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}

exports.getCatalogs = (req, res) => {
    ModulesCatalog.find({
        marca: req.body.marc, 
        model: req.body.model, 
        catalog: req.body.catalog 
    }).then(result => {
        // console.log(result)
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}
