const express = require("express");
const bodyParser = require("body-parser");
const libConvert = require("./convert");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.get("/", async function (req, res) {
  return res.send(`
  <!DOCTYPE html>
    <html lang="en">
    <meta charset="UTF-8">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="">
    <style>
    </style>
    <script src=""></script>
    <body>
      <h1>Text Transform</h1>
      <form method="POST" action="/transform">
        <input name="text-transform" value="William Vilas Boas"/>
        <input type="number" value="400" name="width" placeholder="400"/>
        <input type="number" value="400" name="height" placeholder="400"/>
        <input type="number" value="20" name="fontSize" placeholder="400"/>
        <input type="number" value="200" name="maxWidth" placeholder="400"/>
        
        <button type="submit">
          Enviar
        </button>
      </form>
    </body>
  </html>
  `);
});

app.post("/transform", async function (req, res) {
  try {
    const {
      "text-transform": text,
      width,
      height,
      fontSize,
      maxWidth,
    } = req.body;

    const convert = libConvert({
      text,
      width: parseInt(width),
      height: parseInt(height),
      fontSize: parseInt(fontSize),
      maxWidth: parseInt(maxWidth),
      nameFile: text.toLowerCase().replace(/\s/gi, "-"),
    });

    return convert.pipe(res);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

app.listen(9003, function () {
  console.log("Online in port 9003 http://localhost:9003");
});
