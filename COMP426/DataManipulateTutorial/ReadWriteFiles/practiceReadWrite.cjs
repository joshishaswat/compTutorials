// Convert JSON object to JSON string
// const config = {ip:'1234.22.11',port:3000};
// console.log(JSON.stringify(config));

// Convert JSON string to JSON object
// const config = JSON.stringify({ip:'1234.22.11',port: 3000});
// console.log(JSON.parse(config));

// Read JSON file synchronous 
// const fs = require('fs');
// fs.readFileSync(path, options);

// Read JSON file asynchronous
// path = url / filename
// options = encoding / flag / signal
// callback = data
// const fs = require('fs');
// fs.readFile(path, options, callback);

// Load a JSON file
// const config = require('./config.json');
// console.log(config);

// Read a JSON file, update it
'use strict';

const fs = require('fs');

fs.readFile('student.json', (err, data) => {
	if (err) throw err;
	let student = JSON.parse(data);
	console.log(student);
});

console.log('This is after the read call');

let student = {
	name: "loser",
	age: 69,
	gender: "male",
};

let data = JSON.stringify(student);
fs.writeFileSync('student.json', data);

console.log(student); 
