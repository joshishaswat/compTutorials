const express = require("express"),
app = express()

require("dotenv")
	.config()

// Parse requests of content-type - application/json
app.use(express.json())
// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
	extended: true
}))

// Setup server to listen on port 8080
app.listen(process.env.PORT || 8080, () => {
	console.log("Server is live on port 8080")
})



