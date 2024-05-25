import fetch from 'node-fetch';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
console.log(args);

const response = await fetch("https://tradestie.com/api/v1/apps/reddit?date=2023-04-03");
const stock_data = await response.json();
console.log(stock_data);
