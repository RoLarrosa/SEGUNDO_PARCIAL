require('dotenv/config.js');
const mongoose = require('mongoose');

const MONGO_SERVER = 'mongodb'; // servidor (localhost)
const MONGO_USERNAME = process.env.ME_CONFIG_MONGODB_ADMINUSERNAME || 'root'; // usuario
const MONGO_PASSWORD = process.env.ME_CONFIG_MONGODB_ADMINPASSWORD || 'micontrasenia'; // contraseña
const MONGO_DATABASE = process.env.ME_CONFIG_MONGODB_DATABASE || 'mibasededatos'; // base de datos
const URI = 'mongodb://' + MONGO_USERNAME + ':' + MONGO_PASSWORD + '@' + MONGO_SERVER + ':27017/' + MONGO_DATABASE + '?authSource=admin'
// mongodb://root:micontrasenia@database:27017/mibasededatos?authSource=admin



module.exports={MONGO_SERVER,MONGO_USERNAME,MONGO_PASSWORD,URI};