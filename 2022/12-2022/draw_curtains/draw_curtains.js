// // tests that this js file loads from the html file
// console.log("heyo");

// // tests our ability to select and manipulate elements on the DOM using D3
// const testContainer = d3.select(".action");
// console.log(testContainer);
// testContainer.append("span").text("sup");

// select the body html element
const body = d3.select("body");

const height = 200;
const width = 300;

const drawCanvas = (id) => {
  const styles = "border: solid 1px black; margin: 8px;";
  body
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .attr("style", styles)
    .attr("id", id);
};

// body.append("svg").attr("height", 200).attr("width", 300).attr("style", styles);

let i = 0;
while (i < 80) {
  drawCanvas(`id${i}`);
  i++;
}

// drawCanvas();
// drawCanvas();
// drawCanvas();
// drawCanvas();
// drawCanvas();
// drawCanvas();
// drawCanvas();

// const canvas = d3.select("#id0");
// console.log(svg);
// canvas
//   .append("path")
//   .attr("d", "M4,0 c0,50 20,250 2,200")
//   .attr("fill", "none")
//   .attr("stroke-width", "1px")
//   .attr("stroke", "#000");

// const getRandomInt = (max) => {
//   return Math.floor(Math.random() * max);
// };
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const drawCurtain = (canvas) => {
  const startPoint = `${getRandomInt(0, width)},0`;
  const endPoint = `${getRandomInt(0, width)},200`;
  const controlPoint1 = `${getRandomInt(width / 2.0, width)},${getRandomInt(
    height / 2.0,
    height
  )}`;
  const controlPoint2 = `${getRandomInt(0, width / 2.0)},${getRandomInt(
    0,
    height / 2.0
  )}`;

  canvas
    .append("path")
    // .attr("d", "M4,0 c0,50 20,250 2,200")
    .attr("d", `M${startPoint} c${controlPoint1} ${controlPoint2} ${endPoint}`)
    .attr("fill", "none")
    .attr("stroke-width", "1px")
    .attr("stroke", "#000");
};

i = 0;
while (i < 80) {
  const canvas = d3.select(`#id${i}`);
  drawCurtain(canvas);
  i++;
}
