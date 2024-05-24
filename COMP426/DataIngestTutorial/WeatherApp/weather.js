// Load fetch
import fetch from 'node-fetch';
// Load minimist
// Const minimist = require('fs')
import minimist from 'minimist';
// Create an object from command line arguments
const args = minimist(process.argv.slice(2));
// Dump the arguments to STDOUT
console.log(args)

// Make a request
const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.92&longitude=-79.05&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York');
// Get the data from the request
const data = await response.json();
// Log the data onto STDOUT
console.log(data);
