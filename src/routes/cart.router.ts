import express from "express";
import Container from "typedi";
import CartController from "../controllers/cart.controller";

const app = express();

const cartRouter = express.Router();

const cartController = Container.get(CartController);

cartRouter.post("/", (req, res) => cartController.addProductToCart(req, res));
cartRouter.get("/empty/:id", (req, res) => cartController.emptyCart(req, res));
cartRouter.get("/:id", (req, res) =>
  cartController.getCartProductsById(req, res)
);
cartRouter.get("/remove", (req, res) =>
  cartController.removeProductFromCart(req, res)
);
cartRouter.post("/update", (req, res) =>
  cartController.updateCartProductQuantity(req, res)
);

export default cartRouter;
