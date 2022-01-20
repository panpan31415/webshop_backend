import express from "express";
import helmet from "helmet";
import productRouter from "./routes/productRoute";
const app = express();
app.use(helmet());

import { connect, fillDataToDB } from "./services/db";

const main = async function () {
  try {
    const connection = await connect();
    const msg = await fillDataToDB(connection);
    console.log(msg);
  } catch (e) {
    console.log(e);
  }
  app.get("/", (req, res) => {
    res.send("<h1>hello world</h1>");
  });
  app.use(productRouter);

  app.listen(3000);
};
main();
