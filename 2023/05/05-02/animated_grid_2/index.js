const d3 = require("d3");
const math = require("/Users/nick.smith/grapespace/skillsdev/code_studies/utils/math");
const colors = require("/Users/nick.smith/grapespace/skillsdev/code_studies/utils/colors");

const canvas = d3.select('#canvas').append('svg').attr('width', 1200).attr('height', 800);

const yStartingPoints = []
let numVerticalLines = math.rand(8,16);
let currentStartPoint = math.rand(1,88);
while (numVerticalLines > 0) {
    yStartingPoints.push(currentStartPoint)
    numVerticalLines -= 1
    currentStartPoint = currentStartPoint + math.rand(44,111)
}
// console.log(yStartingPoints);

const xStartingPoints = []
let numHorizontalLines = math.rand(8,16);
currentStartPoint = math.rand(1,88);
while (numHorizontalLines > 0) {
    xStartingPoints.push(currentStartPoint)
    numHorizontalLines -= 1
    currentStartPoint = currentStartPoint + math.rand(44,111)
}
// console.log(xStartingPoints);

const drawHorizontalLine = (lineStart) => {
    const line = canvas.append('path')
        .attr('d', `M8,${lineStart} L${math.rand(666,1200)},${lineStart}`)
        .attr('stroke', colors.rand())
        .attr('stroke-width', math.rand(1,4))
    
    const lineLength = line.node().getTotalLength();

    line
        .attr('stroke-dasharray', lineLength + " " + lineLength)
        .attr('stroke-dashoffset', lineLength)
        .transition()
            .attr('stroke-dashoffset', 0)
            .delay(math.rand(0,800))
            .duration(math.rand(1000,12000))
};

const drawVerticalLine = (lineStart) => {
    const line = canvas.append('path')
        .attr('d', `M${lineStart},8 L${lineStart},${math.rand(444,800)}`)
        .attr('stroke', colors.rand())
        .attr('stroke-width', math.rand(1,3))
    
    const lineLength = line.node().getTotalLength();

    line
        .attr('stroke-dasharray', lineLength + " " + lineLength)
        .attr('stroke-dashoffset', lineLength)
        .transition()
            .attr('stroke-dashoffset', 0)
            .delay(math.rand(0,1500))
            .duration(math.rand(1000,12000))
};

xStartingPoints.forEach(startPoint => drawVerticalLine(startPoint));
yStartingPoints.forEach(startPoint => drawHorizontalLine(startPoint));
