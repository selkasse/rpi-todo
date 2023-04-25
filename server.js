// import express from "express";
const express = require("express");
const { Gpio } = require("onoff");
const app = express();
const port = 3000;

const redLedOut = new Gpio(18, "out");
const greenLedOut = new Gpio(25, "out");
let isComplete = false;

app.get("/check", (req, res) => {
  res.send("you have checked the item");
  console.log("item was checked");
  isComplete = true;
  illuminate();
});

app.get("/uncheck", (req, res) => {
  res.send("you have unchecked the item");
  console.log("item was unchecked");
  isComplete = false;
  illuminate();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

let illuminate = () => {
  if (isComplete) {
    greenLedOut.writeSync(1);
  } else {
    redLedOut.writeSync(1);
  }
};
