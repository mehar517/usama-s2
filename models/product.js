var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    name: String,
    id: String,
    duration: String,
    fee: String
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;