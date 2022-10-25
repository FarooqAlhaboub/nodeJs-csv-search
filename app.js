
const CSV = require('./csv');
const csv = new CSV();
const myArgs = process.argv.slice(2);
csv.find(myArgs[0], myArgs[1], myArgs[2]);
