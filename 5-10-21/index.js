const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomColor = () => Math.floor(Math.random()*16777215).toString(16);

const generateCircle = () => {
  var canvas = document.getElementById('circle');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var X = randomBetween(1, canvas.width);
    var Y = randomBetween(1, canvas.height);
    var R = randomBetween(1,400);
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = randomBetween(1,8);
    ctx.strokeStyle = '#' + randomColor();
    ctx.stroke();
  }
}

const draw = () => {
  setInterval(
    () => generateCircle(),
    100,
  );
}