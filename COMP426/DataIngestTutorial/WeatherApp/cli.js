//// Load minimist
const minimist = require("minimist");
//// v1: Show array of command line arguments from the 'process' object.
//// Docs: https://nodejs.org/docs/latest/api/process.html#processargv
// const args = process.argv;
//// v2: Slice the array to get the arguments at and after index position 2.
//// Docs: https://www.w3schools.com/jsref/jsref_slice_array.asp
// const args = argv.slice(2);
//// v3: Create an object indexed to command line arguments options.
//// Docs: https://github.com/minimistjs/minimist
const args = minimist(process.argv.slice(2));
//// You can also curry these functions all together into one line:
//   const args = require('minimist')(process.argv.slice(2));
//// Dump the arguments to STDOUT
// console.log(args);

console.log(args);
