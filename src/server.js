import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import router from "./routes/products.routes.js";

const PORT = Number(getEnvVar('PORT', 3000));

export const startServer = () => {
	const app = express();

	app.use(express.json());
	app.use(cors());

	app.use(
		pino({
			transport: {
				target: 'pino-pretty',
			},
		}),
	);

	app.use('/api', router);

	app.use(( req, res, next ) => {
		res.status(404).json({
			message: 'Route not found',
		});
	});

	app.use(( err, req, res, next ) => {
		res.status(500).json({
			message: 'Something went wrong',
			error: err.message,
		});
	});

	app.listen(PORT, () => {
		console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
	});
};
