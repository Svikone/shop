const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
    name: String,
    category_ru: String,
    url_img: String
});
module.exports = mongoose.model("categorys",categorySchema);