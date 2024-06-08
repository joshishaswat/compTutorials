// Define app using express
var express = require("express")
var app = express()
// Require database SCRIPT file
const db = require("./database.js")
// Require md5 MODULE
//var md5 = require("md5")
// Make Express use its own built-in body parser for both urlencoded and JSON body data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Server port
var HTTP_PORT = 3000 
// Start server
const server = app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// READ (HTTP method GET) at root endpoint /app/
app.get("/app/", (req, res, next) => {
    res.json({"message":"Your API works! (200)"});
	res.status(200);
});

// Define other CRUD API endpoints using express.js and better-sqlite3
// CREATE a new user (HTTP method POST) at endpoint /app/new/
app.post("/app/new/user", (req, res, next) => {
    let data = {
        user: req.body.username,
        pass: req.body.password,
	emailaddr: req.body.email
    }
    const stmt = db.prepare('INSERT INTO userinfo (username, password, email) VALUES (?, ?, ?)')
    const info = stmt.run(data.user, data.pass, data.emailaddr)
    res.status(200).json(info)
});
// READ a list of users (HTTP method GET) at endpoint /app/users/
app.get("/app/users", (req, res) => {	
    try {
        const stmt = db.prepare('SELECT * FROM userinfo').all()
        res.status(200).json(stmt)
    } catch {
        console.error(e)
    }
});

// READ a single user (HTTP method GET) at endpoint /app/user/:id
app.get("/app/user/:id", (req, res) => {
    try {
        const stmt = db.prepare('SELECT * FROM userinfo WHERE id = ?').get(req.params.id);
        res.status(200).json(stmt)
    } catch (e) {
        console.error(e)
    }

});

// UPDATE a single user (HTTP method PATCH) at endpoint /app/update/user/:id
app.patch("/app/update/user/:id", (req, res) => {
    let data = {
        user: req.body.username,
        pass: req.body.password,
	emailaddr: req.body.email
    }
    const stmt = db.prepare('UPDATE userinfo SET username = COALESCE(?,username), password = COALESCE(?,password), email = COALESCE(?,email) WHERE id = ?')
    const info = stmt.run(data.user, data.pass, data.emailaddr, req.params.id)
    res.status(200).json(info)
});

// DELETE a single user (HTTP method DELETE) at endpoint /app/delete/user/:id
app.delete("/app/delete/user/:id", (req, res) => {
    const stmt = db.prepare('DELETE FROM userinfo WHERE id = ?')
    const info = stmt.run(req.params.id)
    res.status(200).json(info)
});

// Default response for any other request
app.use(function(req, res){
	res.json({"message":"Endpoint not found. (404)"});
    res.status(404);
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Server stopped.')
    })
})
