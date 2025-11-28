import express from 'express';
import cors from 'cors';
import {variables} from '../config/variables.js';
import pool from '../db/connection.js';
import XApiKeyMiddleware from './middlewares/xapikey.middleware.js';

const app = express();

app.use(XApiKeyMiddleware);
app.use(cors());
app.use(express.json()); 

app.get('/status', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.get("/now", async (req, res) => {
  const result = await pool.query('SELECT now()');
  res.json({ now: result.rows[0].now });
});

app.listen(variables.API.PORT, () => {
  console.log(`Server is running on port ${variables.API.PORT}`);
});