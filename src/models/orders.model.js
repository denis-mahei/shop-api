import { pool } from '../db/db.js';
import { sendOrderNotification } from '../utils/telegramBot.js';

export const createOrderModel = async ( orderData ) => {
	const { name, phone, email, product_id, quantity, comment } = orderData;

	const order = await pool.query(
		`INSERT INTO orders (name, phone, email, product_id, quantity, comment)
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING *`,
		[name, phone, email, product_id, quantity || 1, comment]
	);

	const product = await pool.query(
		`SELECT title
         FROM products
         WHERE id = $1`,
		[product_id]
	);

	await sendOrderNotification({
		...order.rows[ 0 ],
		product_title: product.rows[ 0 ].title
	});

	return order.rows[ 0 ];
};