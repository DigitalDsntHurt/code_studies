const d3 = require("d3");
const math = require('../../utils/math');

const canvasWidth = 999;
const canvasHeight = 444;
const canvas = d3.select('#canvas').append('svg').attr('width',canvasWidth).attr('height',canvasHeight);

// 
// // draw a straight vertical reed
// // 
// const reedRootX = math.rand(4,canvasWidth - 4);
// const reedRootY = canvasHeight;
// const reedRoot = `M${reedRootX},${reedRootY}`;

// const reedTipX = reedRootX;
// const reedTipY = math.rand(2,111);
// const reedTip = `L${reedTipX},${reedTipY}`;

// const reed = canvas.append('path')
//     .attr('fill','none').attr('stroke','gold')
//     .attr('d', `${reedRoot} ${reedTip}`)

// 
// // draw a straight non-vertical reed
//
// const reedRootX = math.rand(4,canvasWidth - 4);
// const reedRootY = canvasHeight;
// const reedRoot = `M${reedRootX},${reedRootY}`;

// const reedTipX = math.plusOrMinusN(reedRootX,math.rand(0,22/100*reedRootX));
// const reedTipY = math.rand(2,111);
// const reedTip = `L${reedTipX},${reedTipY}`;

// const reed = canvas.append('path')
//     .attr('fill','none').attr('stroke','gold')
//     .attr('d', `${reedRoot} ${reedTip}`)


// 
// // draw a curved reed
//
// const reedRootX = math.rand(4,canvasWidth - 4);
// const reedRootY = canvasHeight;
// const reedRoot = `${reedRootX},${reedRootY}`;

// const reedTipX = math.plusOrMinusN(reedRootX,math.rand(0,22/100*reedRootX));
// const reedTipY = math.rand(2,111);
// const reedTip = `${reedTipX},${reedTipY}`;

// const controlPoint1X = reedRootX + math.rand(8,88);
// const controlPoint1Y = math.rand(canvasHeight / 2, canvasHeight);
// const controlPoint1 = `${controlPoint1X} ${controlPoint1Y}`;

// const controlPoint2X = reedTipX - math.rand(8,88);
// const controlPoint2Y = math.rand(0, canvasHeight / 4);
// const controlPoint2 = `${controlPoint2X} ${controlPoint2Y}`;

// const reed = canvas.append('path')
//     .attr('fill','none').attr('stroke','gold')
//     .attr('d', `M${reedRoot} C${controlPoint1},${controlPoint2},${reedTip}`)


// 
// // draw a curved reed that sways
//
const reedRootX = math.rand(4,canvasWidth - 4);
const reedRootY = canvasHeight;
const reedRoot = `${reedRootX},${reedRootY}`;

const reedTipX = math.plusOrMinusN(reedRootX,math.rand(0,22/100*reedRootX));
const reedTipY = math.rand(2,111);
const reedTip = `${reedTipX},${reedTipY}`;

const controlPoint1X = reedRootX + math.rand(8,88);
const controlPoint1Y = math.rand(canvasHeight / 2, canvasHeight);
const generateControlPoint1 = (x,y) => {
    return `${x} ${y}`
};
const controlPoint1 = generateControlPoint1(controlPoint1X, controlPoint1Y);

const controlPoint2X = reedTipX - math.rand(8,88);
const controlPoint2Y = math.rand(0, canvasHeight / 4);
const controlPoint2 = `${controlPoint2X} ${controlPoint2Y}`;

const reed = canvas.append('path')
    .attr('fill','none').attr('stroke','#B59410')
    .attr('d', `M${reedRoot} C${controlPoint1},${controlPoint2},${reedTip}`)

const swayReed = () => {
    const newReedTip = `${math.plusOrMinusN(reedTipX,22)},${math.plusOrMinusN(reedTipY,8)}`;

    const newControlPoint1X = math.plusOrMinusN(controlPoint1X,math.rand(2,44));
    const newControlPoint1Y = math.plusOrMinusN(controlPoint1Y,math.rand(2,11));
    const newControlPoint1 = generateControlPoint1(newControlPoint1X,newControlPoint1Y);

    // const newControlPoint2 = ;

    reed.transition().duration(math.rand(1800,4400))
        .attr('d', `M${reedRoot} C${newControlPoint1},${controlPoint2},${newReedTip}`)
        .on('end', swayReed)
};

swayReed();