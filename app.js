import express from "express";
import helmet from "helmet";

const app = express();
app.use(helmet());

app.all("*", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.listen(3000);
