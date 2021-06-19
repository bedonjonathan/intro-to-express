const express = require("express");

const app = express();
const PORT = 3001;

app.get("/terminator", (request, response) => {
  response.send("I will be back");
});

app.get("/Emeril", (request, response) => {
  response.send("Bam!");
});

// Steve McGarrett - Book 'em Danno!
app.get("/Steve-McGarrett", (request, response) => {
  response.send("Book 'em Danno!");
});

// Batman - To the Batmobile!

app.get("/Batman", (request, response) => {
  response.send("To the batmobile!");
});

// Homer Simpson - D'Oh

app.get("/Homer-Simpson", (request, response) => {
  response.send("D'oh");
});

// Frankenstein - It's alive! It's alive
app.get("/Frankenstein", (request, response) => {
  response.send("It's alive! It's alive");
});

// Travis Bickle - You talkin' to me?
app.get("/Travis-Bickle", (request, response) => {
  response.send("You talkin' to me?");
});

// Jack Dawson - I'm king of the world!
app.get("/Jack-Dawson", (request, response) => {
  response.send("I'm king of the world!");
});

// JJ Evans - Dy-no-myte!
app.get("/JJ-Evans", (request, response) => {
  response.send("Dy-no-myte!");
});
//Che Guevara - Real revolutionaries adorn themselves on the inside not on th surface
app.get("/Che-Guevara", (request, response) => {
  response.send(
    "Real revolutionaries adorn themselves on the inside not on the surface"
  );
  response.send(
    "The revolution is not an apple that falls when its ripe, you ahve to make it fall"
  );

  // you only see the first response
});

const magic8Responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - Definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes, and signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic8", (request, response) => {
  const i = Math.floor(Math.random() * magic8Responses.length);

  response.send(`<h1> ${magic8Responses[i]}</h1>`);
});

app.listen(PORT, () => {
  console.log("listening on PORT ", PORT);
});

module.exports = app;
