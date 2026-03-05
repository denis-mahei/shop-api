import { getItem, listItems } from '../models/products.models.js'

export const getProduct = async ( req, res ) => {
	try {
		const response = await getItem(req.params.id);
		res.status(200).json(response);
	} catch (e) {
		console.log(e.message)
	}
}

export const listProducts = async ( req, res ) => {
	try {
		const response = await listItems();
		res.status(200).json(response);
	} catch (err) {
		res.status(500).send(err);
	}
}

export const addProduct = ( req, res ) => {
	try {
		const response = addItem(req.body);
		res.status(200).json(response);
	} catch (err) {
		res.status(500).send(err);
	}
}

export const editProduct = ( req, res ) => {
	try {
		const response = editItem(parseInt(req.params.id), req.body);
		res.status(200).json(response);
	} catch (err) {
		res.status(500).send(err);
	}
}


export const deleteProduct = ( req, res ) => {
	try {
		const response = deleteItem(parseInt(req.params.id));
		res.status(200).json(response);
	} catch (err) {
		res.status(500).send(err);
	}
}