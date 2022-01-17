import express from "express";

const app = express();

app.all("*", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.listen(3000);
