// Require better-sqlite3.
const Database = require('better-sqlite3');

// Connect to a database or create one if it doesn't exist yet.
const db = new Database('app.db');

// Is the database initialized or do we need to initialize it?
const stmt = db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='userinfo';`
    );
// Define row using `get()` from better-sqlite3
let row = stmt.get();
// Check if there is a table. If row is undefined then no table exists.
if (row === undefined) {
// Echo information about what you are doing to the console.
    console.log('Your userinfo table appears to be empty. Initializing it now.');
// Set a const that will contain your SQLlite commands to initialize the userinfo talbe.
    const sqlInit = `
        CREATE TABLE userinfo ( id INTEGER PRIMARY KEY, username VARCHAR, password VARCHAR, email VARCHAR );
        INSERT INTO userinfo (username, password, email) VALUES ('user1','supersecurepassword','user1@email.unc.edu'),('test','anotherpassword','test@somehost.com');
    `;
// Execute SQL commands that we just wrote above.
    db.exec(sqlInit);
// Echo information about what we just did to the console.
    console.log('userinfo table created in app.db.');
} else {
// Since the database already exists, echo that to the console.
    console.log('userinfo table check passed.')
}
// Export all of the above as a module so that we can use it elsewhere.
module.exports = db
