import { pool } from '../db/db.js';


export const getItem = async ( productId ) => {
	try {
		const products = await pool.query(`SELECT products.*,
                                                  json_agg(
                                                          json_build_object(
                                                                  'url', product_images.url
                                                          )
                                                  ) AS images
                                           FROM products
                                                    LEFT JOIN product_images ON products.id = product_images.product_id
                                           WHERE products.id = $1
                                           GROUP BY products.id`, [productId]);
		return products.rows[ 0 ]
	} catch (err) {
		console.log('Error', err)
	}
}

export const listItems = async () => {
	try {
		const items = await pool.query(`SELECT id, title, color, price, poster
                                        FROM products;`);
		return items.rows
	} catch (err) {
		console.log('Error', err)
	}
}