const ModulesCart = require("../model/cart");

exports.getCart = (req, res) => {
    ModulesCart.find().then(result => {
        res.send(result).sendStatus(200);
    }).catch(err => {
        res.status(500);
    })
}