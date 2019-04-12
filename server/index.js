import routes, { mock } from './routes/index.js';
import nRoutes from './nRoutes';

const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = nRoutes.getRequestHandler(app);

app.prepare().then(() => {
	const server = express();
	const _routes =
		process.env.NODE_ENV === 'mock' ? Object.assign(routes, mock) : routes;

	Object.keys(_routes).forEach(key => server.use('/', _routes[key]));

	server.get('*', (req, res) => handle(req, res));

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
