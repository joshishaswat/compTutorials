// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")
var md5 = require("md5")

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Server port
var HTTP_PORT = 3000
// Start server
app.listen(HTTP_PORT, () => {
	console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
})

// Root endpoint
app.get("/", (req, res, next) => {
	res.json({"message" : "Ok"})
})

// Insert here other API endpoints

// GET ALL
app.get("/api/users", (req, res, next) => {
	var sql = "SELECT * FROM user"
	var params = []
	db.all(sql, params, (err, rows) => {
		if (err) {
			res.status(400).json({"error": err.message})
			return
		}
		res.json({
			"message": "success",
			"data": rows
		})
	})
})

// GET ONE
app.get('/api/user/:id', (req, res) => {
	const id = req.params.id
	var sql = `SELECT * FROM user 
		   WHERE id = ?`
	db.get(sql, [id], (err, row) => {
		if (err) {
			return console.error(err.message)
		}
		res.json({
			"message": "success",
			"data": row
		})
	})
})

// CREATE ACCOUNT
app.post("/api/user/", (req, res, next) => {
	var errors = []
	if (!req.body.password) {
		errors.push("No password specified")
	}
	if (!req.body.email) {
		errors.push("No email specified")
	}
	if (errors.length) {
		res.status(400).json({"error": errors.join(",")})
		return
	}
	var data = {
		name: req.body.name,
		email: req.body.email,
		password: md5(req.body.password)
	}
	var sql = `INSERT INTO user(name, email, password) VALUES (?,?,?)`
	var params = [data.name, data.email, data.password]
	db.run(sql, params, function(err, result) {
		if (err) {
			res.status(400).json({"error": err.message})
			return
		}
		res.json({
			"message": "success",
			"data": data,
			"id": this.lastID
		})
	})
})

// UPDATE
app.patch("/api/user/:id", (req, res) => {
	console.log("UPDATE CALLED")
	const id = req.params.id
	var sql = `UPDATE user set
		   name = COALESCE(?, name),
		   email = COALESCE(?, email),
		   password = COALESCE(?, password)
		   WHERE id = ?`
	var data = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password ? md5(req.body.password) : null
	}
	db.run(sql,
		[data.name, data.email, data.password, req.params.id],
		function(err, result) {
			if(err) {
				return console.error(err.message)
			}
			res.json({
				message: "success",
				data: data,
				changes: this.changes
			})
		})
})

// DELETE
app.delete("/api/user/:id", (req, res) => {
	console.log("DELETE CALLED")
	const id = req.params.id
	var sql = `DELETE FROM user WHERE id = ?`
	db.run(sql, id,
	function(err, result) {
		if(err) {
			return console.error(err.message)
		}
		res.json({"message":"deleted", changes: this.changes})
	})	
})

// Default response for any other request
app.use(function(req, res) {
	res.status(404)
})




