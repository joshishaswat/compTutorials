const express = require("express");

const app = express()

app.listen(3001, () => {
	console.log("Server running on port 3001");
})

//app.get to handle GET requests
//req - http requests, res - desired response
app.get("/", (req, res) => {
	res.send("Hello World");
})
