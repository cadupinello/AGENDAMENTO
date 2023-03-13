import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const port = process.env.PORT;

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
import conn from './config/db.js';

import router from './routes/index.js';
app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
})
