#!/usr/bin/env node

const random = require('../src/index.js');

console.log(random(Number(process.argv[2]),Number(process.argv[3])));