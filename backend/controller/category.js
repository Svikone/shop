const ModulesMarca = require("../model/marca");
const ModulesModel = require("../model/model");

exports.getMarc = (req, res) => {
    ModulesMarca.then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.sendStatus(500);
    })
}
