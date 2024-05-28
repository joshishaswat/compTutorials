// Convert JSON object to JSON string
// const config = {ip:'1234.22.11',port:3000};
// console.log(JSON.stringify(config));

// Convert JSON string to JSON object
// const config = JSON.stringify({ip:'1234.22.11',port: 3000});
// console.log(JSON.parse(config));


// Synchronous 
const fs = require('fs');
fs.readFileSync(path, options);

// Callback API (async)
// path = url / filename
// options = encoding / flag / signal
// callback = data
const fs = require('fs');
fs.readFile(path, options, callback);
