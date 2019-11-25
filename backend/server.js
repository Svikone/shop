const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

app.use(cors({origin: "http://localhost:8080"}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use (bodyParser.json ({
	extended: true,
	limit: "50mb"
}));

const categoryRouter = require("./routes/category");
const cartRouter = require("./routes/cart");

app.use("/api/shop/category", categoryRouter);
app.use("/api/shop/cart", cartRouter);




app.listen(9000, function(){
    console.log("server started 9000");
})