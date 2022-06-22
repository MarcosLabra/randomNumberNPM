#!/usr/bin/env node

const random = require('../src/index.js');
if(process.argv[2] !== undefined && process.argv[3] !== undefined) {
    console.log(`el numero aleatorio entre ${process.argv[2]} y ${process.argv[3]} es: `)
    console.log(random(Number(process.argv[2]),Number(process.argv[3])));
} else {
    console.log(`el numero aleatorio entre 0 y 1000 (por defecto) es: `)
    console.log(random());
}
