import { createOrderModel } from '../models/orders.model.js';

export const createOrder = async ( req, res ) => {
	try {
		const order = await createOrderModel(req.body);
		res.status(201).json(order);
	} catch (err) {
		res.status(500).send(err);
	}
};