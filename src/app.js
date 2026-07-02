require('dotenv').config();
const express = require('express');
const cors = require('cors');

const usuarioRoutes = require('./routes/usuario.routers');

const errorMiddeleware = require('./middlewares/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/' , usuarioRoutes);

app.use(errorMiddeleware);

module.exports = app;
