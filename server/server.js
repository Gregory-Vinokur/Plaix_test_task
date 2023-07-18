import express, { json } from 'express';
import pkg from 'pg';
import cors from 'cors';
const { Pool } = pkg;

const app = express();
const port = 8000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'feedback_form',
  password: 'postgre321',
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
