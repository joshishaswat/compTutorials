const express = require("express"),
app = express(),
mongoose = require("mongoose"),
userRoutes = require("./routes/user")

// Connect to database
try {
	mongoose.connect("mongodb+srv://joshishaswat:Samosabucket@cluster0.kgylxvu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
	useUnifiedTopology: true,
	useNewUrlParser: true
	})
	console.log("connected to db")
} catch (error) {
	handleError(error)
}

process.on('unhandleRejection', error => {
	console.log('unhandleRejection', error.message)
})

// Parse requests of content-type - application/json
app.use(express.json())
// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
	extended: true
}))

//using user route
app.use(userRoutes)

// Setup server to listen on port 8080
app.listen(process.env.PORT || 8080, () => {
	console.log("Server is live on port 8080")
})



