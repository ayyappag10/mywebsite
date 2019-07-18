const express = require("express");
const path = require("path");

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

const images = [
  "bargue-bg.jpg",
  "anatomy-bg.jpg",
  "bg-11.jpg",
  "character-bg.jpg",
  "point.jpg",
  "urban-bg.jpg",
  "potrait-bg.jpg",
  "sketch1.jpg",
  "watercolor-bg.jpg"
];

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "firstResponsive.html"));
});

app.get('/randomImage', function(req, res) {
  res
  .json({
    imgSrc: getRandomImage()
  })
  .end();
});

app.get("/complement", function(req, res) {
  res
    .json({
      complement:  getRandomComplement()
    })
    .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");
