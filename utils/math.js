const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const plusOrMinusN = (value, n) => {
    const plusOrMinusOptions = [-1,1];
    return value + n * plusOrMinusOptions[rand(0,1)];
};

exports.plusOrMinusN = plusOrMinusN;
exports.rand = rand;