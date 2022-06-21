module.exports = function getRandomInt() {
    if (Number(process.argv[2]) > Number(process.argv[3])) {
        throw new Error('min must be less than max')
    }
    if (process.argv[2] !== undefined && process.argv[3] !== undefined) {
        return (Math.floor(Math.random() * (Number(process.argv[3]) - Number(process.argv[2]))) + Number(process.argv[2]));
    } else {
        return (Math.floor(Math.random() * 1001))
    }
}

