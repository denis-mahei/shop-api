import express from "express";
import { getProduct, listProducts } from "../controllers/products.controller.js";
import { createOrder } from "../controllers/orders.controller.js";

const router = express.Router();

router.get("/", ( req, res ) => {
	res.status(200).json({
		message: "Welcome to my store!🏬",
	})
});

router.get("/products", listProducts)

router.get('/:id', getProduct)

router.post("/order", createOrder);


export default router;