import express from 'express';
import cors from 'cors';
import {variables} from '../config/variables.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/status', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(variables.API.PORT, () => {
  console.log(`Server is running on port ${variables.API.PORT}`);
});