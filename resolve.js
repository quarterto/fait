#!/usr/bin/env node

var resolve = require('resolve');

console.log(resolve.sync(process.argv[2], {
	basedir: process.cwd(),
}));