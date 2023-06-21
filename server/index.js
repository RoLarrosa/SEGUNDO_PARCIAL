require('dotenv/config.js');

const express = require('express');
const mariadb = require('mariadb');
const mongoose = require('mongoose');
const cors = require('cors');

require('./database_mongo');
require('./database_maria');
const {pool } = require('./database_maria')
const {URI}= require('./database_mongo')


const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())


// Rutas CRUD
app.get('/check-mariadb-connection',async (req, res) => {
	await pool.getConnection()
	.then(connection => {
		res.json('Conexión exitosa a Mariadb');
		connection.release();
	})
	.catch(error => {
		res.json('Error al conectar a la base de datos:', error);
	});
});

app.get('/check-mongodb-connection', async(req, res) => {
	
	// Conexión a la base de datos MongoDB
		await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => {
			res.json('Conexión exitosa a MongoDB');
		}).catch((error) => {
			res.json('Error al conectar a MongoDB:', error);
		});

	});	
	


// Iniciar el servidor
app.listen(port, () => {
	console.log(`Servidor iniciado en el puerto ${port}`);
});
