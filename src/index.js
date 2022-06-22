module.exports = function getRandomInt(min, max) {
    if (min > max) {
        throw new Error('min must be less than max')
    }
    if (min !== undefined && max !== undefined) {
        return (Math.floor(Math.random() * (max - Number(min))) + Number(min));
    } else {
        return (Math.floor(Math.random() * 1001))
    }
}

