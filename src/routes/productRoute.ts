import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
const productRouter = Router();
productRouter.get("/products", async function (req, res, nxt) {
  const productController = new ProductController();
  res.send(await productController.all());
});

export default productRouter;
