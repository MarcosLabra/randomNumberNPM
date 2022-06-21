# Random Number Generator

### install

    npm i random-num-gen-v2

### require

    const random = require('random-num-gen-v2');

Then use it like a function

    console.log (random())
    //{the random number}

### arguments

when you run it can add a min and a max number with argv, if not it will give you a integer number within 0 and 1000

    node {yourFile.js}  {min} {max}


### NPX

It can also be used without npm i and requiered (argument can be used as well)

    npx random-num-gen-v2 {min} {max}

<strong> It wont allow a min number bigger than the max number