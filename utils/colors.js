const math = require("./math");

const COLORS = [
    "#152b61",
    "#087474",
    "#c91d07",
    "#f00c51",
    "#955bff",
    "#206000",
    "#efa009",
    "#f7a9a9",
    "#9e0b0b",
    "#dddddd",
    "#c6e2ff",
    "#b0e0e6",
    "#f7b268",
    "#977073",
    "#d76067",
    "#981d26",
    "#66545e",
    "#a39193",
    "#aa6f73",
    "#eea990",
    "#f6e0b5",
    "#f7cac9",
    "#dec2cb",
    "#c5b9cd",
    "#abb1cf",
    "#92a8d1",
    "#52bf90",
    "#49ab81",
    "#419873",
    "#398564",
    "#317256",
    "#f98787",
    "#e76a6a",
    "#d65b5b",
    "#c14b4b",
    "#b83f3f",
];

const rand = () => {
    return COLORS[math.rand(0,COLORS.length - 1)];
};

// console.log(randomColor());
// console.log(randomColor());
// console.log(randomColor());
// console.log(randomColor());
// console.log(randomColor());
// console.log(randomColor());
// console.log(randomColor());
// console.log(randomColor());

exports.rand = rand;
