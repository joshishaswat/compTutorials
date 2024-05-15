const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname,"/views"));

app.get("/",(req,res) => {
	res.render("index", {
		author: "Shaswat Joshi",
	});
});

app.listen(3000, (req, res) => {
	console.log("Server running on 3000");
})
