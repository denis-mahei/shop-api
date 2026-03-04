import express from "express";
import { getProduct, listProducts } from "../controllers/products.controller.js";

const router = express.Router();

router.get("/products", listProducts)

router.get('/:id', getProduct)
//
// router.put('/:id', editProduct)
//
// router.post('/', addProduct)
//
// router.delete('/:id', deleteProduct)

export default router;