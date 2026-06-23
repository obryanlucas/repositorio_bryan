require('dotenv').config();
const express = require('express');
const cors = require('cors');

const usuarioRoutes = require('./routes/usuario.routes');

const errorMiddeleware = require('./middlewares/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/usuario' , usuarioRoutes);

app.use(errorMiddeleware);

module.exports = app;
