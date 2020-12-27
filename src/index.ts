import express from "express";

const app = express();
const port: number = 4000;

app.get("/", (req, res) => {
  res.send("Coffee Bot Activated !!!");
});

app.listen(port, () => {
  return console.log(`Coffee Bot is listening on ${port}`);
});
