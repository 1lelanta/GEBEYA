const express = require('express');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '../upload/images')));

app.use('/', routes);

app.use((req, res) => {
	res.status(404).json({
		success: false,
		message: 'Route not found',
	});
});

app.use(errorHandler);

module.exports = app;
