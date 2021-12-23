import express from "express";
import categoryRouter from "./category.router";
import departmentRouter from "./department.router";

const router = express.Router();

router.use("/departments", departmentRouter);
router.use("/categories", categoryRouter);

export default router;