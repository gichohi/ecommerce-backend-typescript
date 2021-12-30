import express from "express";
import categoryRouter from "./category.router";
import customerRouter from "./customer.router";
import departmentRouter from "./department.router";
import orderRouter from "./order.router";
import productRouter from "./product.router";

const router = express.Router();

router.use("/departments", departmentRouter);
router.use("/categories", categoryRouter);
router.use("/customers", customerRouter);
router.use("/products", productRouter);
router.use("/orders", orderRouter);


export default router;