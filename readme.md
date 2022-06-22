# Random Number Generator

### install

    npm i random-num-gen-v2

### require

    const random = require('random-num-gen-v2');

Then use it like a function

    console.log (random({min},{max}))
    //output: {the random number}

### arguments

Add a min(included) and a max(excluded) number, if not it will give you a integer number within 0 and 1000

### NPX

It can also be used without npm i and requiered (argument can be used as well with argv)

    npx random-num-gen-v2 {min} {max}

<strong> It wont allow a min number bigger than the max number