const mongoose = require("mongoose");
const marcaSchema = mongoose.Schema({
    name: String,
    url_img: String
});
module.exports = mongoose.model("marcs",marcaSchema);