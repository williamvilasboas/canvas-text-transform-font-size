var Canvas = require("canvas");

module.exports.caclFontSize = ({ width, height, text, fontSize }) => {
  var canvas = Canvas.createCanvas(width, height);
  var ctx = canvas.getContext("2d");

  ctx.globalAlpha = 0.2;

  ctx.strokeRect(0, 0, 200, 200);
  ctx.lineTo(0, 100);
  ctx.lineTo(200, 100);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineTo(100, 0);
  ctx.lineTo(100, 200);
  ctx.stroke();

  ctx.globalAlpha = 1;
  ctx.font = `normal ${fontSize}px Impact, serif`;

  ctx.rotate(0.5);
  ctx.translate(20, -40);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "#ddd";
  ctx.strokeText(text, 50, 100);

  ctx.fillStyle = "#000";
  ctx.fillText(text, 49, 99);

  var m = ctx.measureText(text);
  ctx.strokeStyle = "#f00";
  return m;
};
