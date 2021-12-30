import express from "express";
import cartRouter from "./cart.router";
import categoryRouter from "./category.router";
import customerRouter from "./customer.router";
import departmentRouter from "./department.router";
import orderRouter from "./order.router";
import productRouter from "./product.router";
import shippingRouter from "./shipping.router";
import taxRouter from "./tax.router";

const router = express.Router();

router.use("/departments", departmentRouter);
router.use("/categories", categoryRouter);
router.use("/customers", customerRouter);
router.use("/products", productRouter);
router.use("/orders", orderRouter);
router.use("/taxes", taxRouter);
router.use("/carts", cartRouter);
router.use("/shipping", shippingRouter);

export default router;