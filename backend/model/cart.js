const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
    name: String,
    category_ru: String,
    url_img: String
});
module.exports = mongoose.model("carts",cartSchema);