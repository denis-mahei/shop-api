import { pool } from '../db/db.js';


export const getItem = async ( productId ) => {
	try {
		const products = await pool.query(`SELECT *
                                           FROM products
                                           WHERE id = $1`, [productId]);
		return products.rows
	} catch (err) {
		console.log('Error', err)
	}
}

export const listItems = async () => {
	try {
		const items = await pool.query(`SELECT id, title, color, price, image_url
                                        FROM products;`);
		return items.rows
	} catch (err) {
		console.log('Error', err)
	}
}

export const editItem = ( productId, data ) => {
	try {
		const index = db.products.findIndex(product => product.id === productId)
		if (index === -1) {
			throw new Error('Product not found')
		} else {
			db.products[ index ] = data
			return db.products[ index ]
		}
	} catch (err) {
		console.log('Error', err)
	}
}
export const deleteItem = ( productId ) => {
	try {
		const index = db.products.findIndex(product => product.id === productId)
		if (index === -1) {
			throw new Error('Product not found')
		} else {
			db.products.splice(index, 1)
			return db.products
		}
	} catch (err) {
		console.log('Error', err)
	}
}
export const addItem = ( data ) => {
	try {
		const newProduct = { id: db.products.length + 1, ...data }
		db.products.push(newProduct)
		return newProduct
	} catch (err) {
		console.log('Error', err)
	}
}