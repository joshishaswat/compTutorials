import fetch from 'node-fetch';
import minimist from 'minimist';
// Get command-linea arguments
const args = minimist(process.argv.slice(2));
// Put args onto STDOUT
console.log(args)
// Get a URL
const response = await fetch(args._[0] + '?' + args.d);
// Store the response JSON data in an object
const data = await response.json();
// Echo back the data to STDOUT
console.log(data);

// load fs built-in
import fs from 'fs';
// Stringify data
let dataString = JSON.stringify(data)
// Write the data to a file
fs.writeFileSync("./current_weather.json", dataString)
