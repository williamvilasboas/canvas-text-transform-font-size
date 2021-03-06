var fs = require("fs");
var path = require("path");
var { createCanvas, Image } = require("canvas");

module.exports = ({
  text,
  width,
  height,
  fontSize = 60,
  positionX = 0,
  positionY = 0,
  color = "#fff",
  fontFamily = "Impact",
  maxWidth = 0,
  nameFile,
}) => {
  const canvas = createCanvas(width, height);
  var ctx = canvas.getContext("2d");
  ctx.quality = "best";
  var img = new Image();
  img.src = "test.jpeg";

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  ctx.save();

  const center = positionX || canvas.width / 2;
  const centerY = positionY || height - height / 16;
  ctx.globalAlpha = 1;
  ctx.font = `normal ${fontSize}px ${fontFamily}, serif`;
  ctx.textAlign = "center";
  ctx.fillStyle = color;

  ctx.fillText(text, center, centerY, maxWidth || center);
  return canvas.createPNGStream();

  // TODO: Save on disk
  // canvas
  //   .createPNGStream()
  //   .pipe(fs.createWriteStream(path.join(__dirname, `public/${nameFile || 'text'}.png`)));
};
