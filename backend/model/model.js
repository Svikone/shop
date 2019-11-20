const mongoose = require("mongoose");
const modelSchema = mongoose.Schema({
    name: String,
    marca: String,
    url_img: String

});
module.exports = mongoose.model("model",modelSchema);