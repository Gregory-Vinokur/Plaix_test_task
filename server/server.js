import express, { json } from 'express';
import pkg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';
const { Pool } = pkg;
dotenv.config();

const app = express();
const port = 8000;

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.PASSWORD,
  port: 5432,
});

app.use(cors());
app.use(json());

app.post('/feedback', async (req, res) => {
  const { name, phone, email } = req.body;

  try {
    const query = 'INSERT INTO feedback (name, phone, email) VALUES ($1, $2, $3)';
    const newFeedBackCall = await pool.query(query, [name, phone, email]);
    res.status(200).json(newFeedBackCall);
  } catch (error) {
    console.error('Ошибка при вставке данных в базу данных:', error);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
